const fs = require("fs");
const path = require("path");
const sort = require("./sort");
const generate = require("./generate");

const DELIMITER = "\n";

describe("sort", () => {
    it("Should sort file correctly", async () => {
        const originalFile = path.join("./", "test.txt");
        generate(originalFile, 1 * 1024, 1, 1000000);
        const sortedFile = path.join("./", "test_sorted.txt");
        await sort(originalFile, sortedFile, 50 * 1024, DELIMITER);

        const numbersFromOriginal = fs.readFileSync(originalFile).toString()
            .split(DELIMITER)
            .map(s => parseInt(s))
            .filter(n => !isNaN(n))
            .sort((a, b) => a - b);
        const numbersFromSorted = fs.readFileSync(sortedFile).toString()
            .split(DELIMITER)
            .map(s => parseInt(s))
            .filter(n => !isNaN(n));
        expect(numbersFromSorted).toEqual(numbersFromOriginal);

        fs.unlinkSync(originalFile);
        fs.unlinkSync(sortedFile);
    });
});
