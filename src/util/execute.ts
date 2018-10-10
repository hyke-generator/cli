import { ChildProcess, SpawnOptions } from "child_process";
import { spawn } from "child_process";
import { Error } from "tslint/lib/error";

export function execute(
    command: string,
    args?: ReadonlyArray<string>,
    options?: SpawnOptions,
    verbose: boolean = false,
): Promise<ChildProcess> {
    return new Promise<ChildProcess>((resolve, reject) => {
        const child = spawn(command, args, options);

        child.on("exit", (code: number, signal: string) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Could not execute ${command}`));
            }
        });

        child.stdout.on("data", (data: string) => {
            if (verbose) {
                console.log(`stdout: ${data}`);
            }
        });

        child.stderr.on("data", (data: string) => {
            if (verbose) {
                console.log(`stderr: ${data}`);
            }
        });
    });
}
