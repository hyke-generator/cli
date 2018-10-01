import { ChildProcess, SpawnOptions } from 'child_process';

const { spawn } = require('child_process');

export function execute(command: string, args?: ReadonlyArray<string>, options?: SpawnOptions): Promise<ChildProcess> {
    return new Promise<ChildProcess>((resolve, reject) => {
        const child = spawn(command, args, options);

        child.on('exit', function(code: any, signal: any) {
            if (code === 0) {
                resolve();
            } else {
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