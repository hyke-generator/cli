import * as fs from "fs";
import { PathLike } from "fs";

export function writeToFile(path: PathLike, data: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (fs.existsSync(path)) {
            reject('Already exists!');
        }
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
