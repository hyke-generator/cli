"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const child_process_1 = require("child_process");
function execute(command, args, options, verbose = false) {
    return new Promise((resolve, reject) => {
        const child = child_process_1.spawn(command, args, options);
        child.on("exit", (code, signal) => {
            if (code === 0) {
                resolve();
            }
            else {
                reject(new Error(`Could not execute ${command}`));
            }
        });
        child.stdout.on("data", (data) => {
            if (verbose) {
                console.log(`stdout: ${data}`);
            }
        });
        child.stderr.on("data", (data) => {
            if (verbose) {
                console.log(`stderr: ${data}`);
            }
        });
    });
}
exports.execute = execute;
function writeToFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, err => {
            if (err) {
                reject(new Error(`Couldn't write to file ${path}`));
            }
            else {
                resolve();
            }
        });
    });
}
exports.writeToFile = writeToFile;
function readFile(path) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            reject(new Error("File does not exist"));
        }
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error(`Couldn't read file ${path}`));
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readFile = readFile;
function mkdir(directoryPath) {
    return execute("mkdir", ["-p", directoryPath]).catch(() => {
        throw new Error(`Couldn't create ${directoryPath}`);
    });
}
exports.mkdir = mkdir;
//# sourceMappingURL=util.js.map