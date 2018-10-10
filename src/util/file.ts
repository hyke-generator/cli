import { ChildProcess } from "child_process";
import * as fs from "fs";
import { PathLike } from "fs";
import { Error } from "tslint/lib/error";
import { execute } from "./execute";

export function writeToFile(path: PathLike, data: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (fs.existsSync(path)) {
            reject(new Error("Already exists!"));
        }
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(new Error(`Couldn't write to file ${path}`));
            } else {
                resolve();
            }
        });
    });
}

export function mkdir(directoryPath: string): Promise<ChildProcess> {
    return execute("mkdir", ["-p", directoryPath]).catch(() => {
        throw new Error(`Couldn't create ${directoryPath}`);
    });
}
