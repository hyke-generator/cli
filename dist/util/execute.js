"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const error_1 = require("tslint/lib/error");
function execute(command, args, options, verbose = false) {
    return new Promise((resolve, reject) => {
        const child = child_process_1.spawn(command, args, options);
        child.on("exit", (code, signal) => {
            if (code === 0) {
                resolve();
            }
            else {
                reject(new error_1.Error(`Could not execute ${command}`));
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
//# sourceMappingURL=execute.js.map