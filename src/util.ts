import * as fs from "fs";
import { PathLike } from "fs";
import { ChildProcess, spawn, SpawnOptions } from "child_process";

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

export function writeToFile(path: PathLike, data: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.writeFile(path, data, err => {
            if (err) {
                reject(new Error(`Couldn't write to file ${path}`));
            } else {
                resolve();
            }
        });
    });
}

export function readFile(path: PathLike): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (!fs.existsSync(path)) {
            reject(new Error("File does not exist"));
        }
        fs.readFile(path, "utf8", (err, data: string) => {
            if (err) {
                reject(new Error(`Couldn't read file ${path}`));
            } else {
                resolve(data);
            }
        });
    });
}

export function mkdir(directoryPath: string): Promise<ChildProcess> {
    return execute("mkdir", ["-p", directoryPath]).catch(() => {
        throw new Error(`Couldn't create ${directoryPath}`);
    });
}
