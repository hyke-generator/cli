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
function writeToFile(path, data) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(path)) {
            reject('Already exists!');
        }
        if (!fs.existsSync(path)) {
            console.log('exists NOT');
        }
        fs.writeFile(path, data, (err) => {
            if (err) {
                console.log(err);
                reject();
                return;
            }
            resolve();
        });
    });
}
exports.writeToFile = writeToFile;
//# sourceMappingURL=file.js.map