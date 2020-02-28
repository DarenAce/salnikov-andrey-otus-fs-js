const fs = require("fs");
const path = require("path");

const DELIMITER = "\n";

const createNumberIterator = async function* (readStream, delimiter) {
    let remainder = "";
    for await (const chunk of readStream) {
        let lines = (remainder + chunk).split(delimiter);
        remainder = lines.pop();
        yield* lines.map(s => parseInt(s)).filter(n => !isNaN(n));
    }
    if (remainder) {
        yield parseInt(remainder);
    }
};

const splitFile = async (fileName, limit, delimiter) => {
    const readStream = fs.createReadStream(fileName, { "encoding": "UTF-8" });
    const iterator = createNumberIterator(readStream, delimiter);
    const fileNames = [];
    let numbers = [];
    let numbersRead = 0;
    let fileNumber = 0;
    while (true) {
        const { done, value } = await iterator.next();
        if (done) {
            break;
        }
        numbersRead++;
        numbers.push(value);
        // assume sizeof Number === 64 bit or 8 byte
        if (numbersRead * 8 >= limit) {
            fileNames.push(writeToTempFile(path.dirname(fileName), fileNumber++, numbers.sort((a, b) => a - b)));
            numbers = [];
            numbersRead = 0;
        }
    }
    if (numbers.length > 0) {
        fileNames.push(writeToTempFile(path.dirname(fileName), fileNumber++, numbers.sort((a, b) => a - b)));
    }
    return fileNames;
};

const writeToTempFile = (dir, fileNumber, array) => {
    const fileName = path.join(dir, "tmp_" + fileNumber);
    const writeStream = fs.createWriteStream(fileName);
    writeStream.write(array.join(DELIMITER));
    writeStream.end();
    return fileName;
};

const mergeFiles = async (fileNames, outputFilePath, delimiter) => {
    const numberIterators = await createIterators(fileNames);
    const buffer = await Promise.all(numberIterators.map(it => it.next()));
    const writeStream = fs.createWriteStream(outputFilePath);

    const writeToOutput = async function () {
        while (buffer.length > 0) {
            const minIndex = findMinIndex(buffer);
            if (!writeStream.write(buffer[minIndex].value.toString() + delimiter)) {
                writeStream.once("drain", writeToOutput);
                return;
            }
            buffer[minIndex] = await numberIterators[minIndex].next();
            if (buffer[minIndex].done) {
                buffer.splice(minIndex, 1);
                numberIterators.splice(minIndex, 1);
            }
        }
        writeStream.end();
    };

    await writeToOutput();
};

const createIterators = (fileNames) => {
    return Promise.all(
        fileNames
            .map(fileName => fs.createReadStream(fileName, { "encoding": "UTF-8" }))
            .map(stream => createNumberIterator(stream, DELIMITER))
    );
};

const findMinIndex = array => {
    let minIndex = 0;
    let min = array[minIndex].value;
    for (let i = 1; i < array.length; i++) {
        const current = array[i].value;
        if (current < min) {
            min = current;
            minIndex = i;
        }
    }
    return minIndex;
};

const sort = async (fileName, outputFileName, memoryLimit) => {
    if (!fs.statSync(fileName).isFile()) {
        throw new Error(`${fileName} wasn't found.`);
    }
    const tempFileNames = await splitFile(fileName, memoryLimit, DELIMITER);
    await mergeFiles(tempFileNames, outputFileName, DELIMITER);
    tempFileNames.forEach(fileName => fs.unlinkSync(fileName));
};

if (require.main === module) {
    const args = process.argv.slice(2);
    sort(...args).then(() => console.log(`File \"${args[0]} has been sorted.\"`)).catch(console.error);
}

module.exports = sort;
