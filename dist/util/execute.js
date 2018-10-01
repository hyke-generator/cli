"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { spawn } = require('child_process');
function execute(command, args, options) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, options);
        child.on('exit', function (code, signal) {
            if (code === 0) {
                resolve();
            }
            else {
                reject();
            }
        });
        // child.stdout.on('data', (data: string) => {
        //     console.log(`stdout: ${data}`);
        // });
        //
        // child.stderr.on('data', (data: string) => {
        //     console.log(`stderr: ${data}`);
        // });
    });
}
exports.execute = execute;
//# sourceMappingURL=execute.js.map