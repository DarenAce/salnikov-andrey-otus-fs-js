const { lstat, readdir } = require("fs");
const { join } = require("path");

const files = [];
const dirs = [];

const tree = async () => {
    const output = {"files": [], "dirs": []};
    if (process.argv.length < 3) {
        console.error("No required argument found. Type in path to the directory.");
        return {};
    } else {
        const path = process.argv[2];
        await processFileTree(path);
        output.files.push(files);
        output.dirs.push(dirs);
    }
    return output;
};

const processFileTree = async (path) => {
    if (await isFile(path)) {
        files.push(path);
    } else if (await isDirectory(path)) {
        dirs.push(path);
        await getDirectoryContent(path)
            .then(names => {
                return Promise.all(names.map(name => processFileTree(join(path, name))));
            })
            .catch(console.error);
    }
};

const isFile = (path) => {
    return new Promise((resolve, reject) => lstat(
        path,
        (error, stat) => error ? reject(error) : resolve(stat.isFile())
    ));
};

const isDirectory = (path) => {
    return new Promise((resolve, reject) => lstat(
        path,
        (error, stat) => error ? reject(error) : resolve(stat.isDirectory())
    ));
};

const getDirectoryContent = (path) => {
    return new Promise((resolve, reject) => readdir(
        path,
        (error, names) => error ? reject(error) : resolve(names)
    ));
};

tree().then(console.log);

module.exports = tree;
