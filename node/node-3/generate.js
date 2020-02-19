const fs = require("fs");

const DELIMITER = "\n";

/**
 * Generate random integer number which lies in interval from lower bound to upper bound.
 * 
 * @param lowerBound — lower bound of interval (inclusive)
 * @param upperBound — upper bound of interval (inclusive)
 * @returns — random integer number
 */
const generateRandomNumber = (lowerBound, upperBound) => {
    return lowerBound + Math.round(Math.random() * (upperBound - lowerBound));
};

const createFile = (
    fileName = "./test.txt",
    fileSize = 1 * 1024 * 1024,
    lowerBound = Number.MIN_SAFE_INTEGER,
    upperBound = Number.MAX_SAFE_INTEGER
) => {
    const writeStream = fs.createWriteStream(fileName, { "encoding": "UTF-8" });
    let bytesWritten = 0;

    const writeNumbers = function() {
        while (bytesWritten < fileSize) {
            const chunk = generateRandomNumber(lowerBound, upperBound).toString() + DELIMITER;
            if (!writeStream.write(chunk)) {
                writeStream.once('drain', writeNumbers);
                return;
            }
            bytesWritten += chunk.length;
        }
        writeStream.end();
    };

    writeNumbers();
};

if (require.main === module) {
    const args = process.argv.slice(2);
    createFile(...args);
    console.log(`FIle \"${args[0]}\" has been generated.`)
}

module.exports = createFile;
