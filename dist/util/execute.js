"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { spawn } = require('child_process');
const child = spawn('pwd');
function execute(command, args, options) {
}
child.on('message', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});
child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});
child.stdout.on('data', (data) => {
    console.log(`child stdout:\n${data}`);
});
child.stderr.on('data', (data) => {
    console.error(`child stderr:\n${data}`);
});
//# sourceMappingURL=execute.js.map