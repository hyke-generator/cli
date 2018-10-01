import * as fs from "fs";
import { PathLike } from "fs";

export function writeToFile(path: PathLike | number, data: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if(err) {
                console.log(err);
                reject();
                return;
            }
            resolve();
        });
    });
}
