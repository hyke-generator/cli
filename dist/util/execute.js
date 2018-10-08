"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { spawn } = require('child_process');
function execute(command, args, options, verbose = false) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, options);
        child.on('exit', function (code, signal) {
            if (code === 0) {
                resolve();
            }
            else {
                reject(new Error(`Could not execute ${command}`));
            }
        });
        if (verbose) {
            child.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            child.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });
        }
    });
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map