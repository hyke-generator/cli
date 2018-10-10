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
const error_1 = require("tslint/lib/error");
const execute_1 = require("./execute");
function writeToFile(path, data) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(path)) {
            reject(new error_1.Error("Already exists!"));
        }
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(new error_1.Error(`Couldn't write to file ${path}`));
            }
            else {
                resolve();
            }
        });
    });
}
exports.writeToFile = writeToFile;
function mkdir(directoryPath) {
    return execute_1.execute("mkdir", ["-p", directoryPath]).catch(() => {
        throw new error_1.Error(`Couldn't create ${directoryPath}`);
    });
}
exports.mkdir = mkdir;
//# sourceMappingURL=file.js.map