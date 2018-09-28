import { ChildProcess, SpawnOptions } from 'child_process';

const { spawn } = require('child_process');
const child = spawn('pwd');


function execute(command: string, args?: ReadonlyArray<string>, options?: SpawnOptions) {

}

child.on('message', function(code: any, signal: any) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

child.on('exit', function(code: any, signal: any) {
    console.log('child process exited with ' +
        `code ${code} and signal ${signal}`);
});

child.stdout.on('data', (data: any) => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data: any) => {
    console.error(`child stderr:\n${data}`);
});