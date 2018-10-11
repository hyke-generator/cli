#!/usr/bin/env node
// @ts-ignore
import yargonaut from "yargonaut";
import * as path from "path";
import * as fs from "fs";
import {PathLike} from "fs";
import * as yargs from "yargs";

const HELP_STYLE = 'green';
const ERROR_STYLE = 'red';
const HIKE_CONFIG_NAME = "hike.json";

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

async function buildYargs() {
    yargonaut.helpStyle(HELP_STYLE).errorsStyle(ERROR_STYLE);
    const cwd = process.cwd();
    // const hikeConfig = JSON.parse(await readFile(path.join(cwd, HIKE_CONFIG_NAME)));

    const hikeConfig = {
      generators: [
          '@hyke/core'
      ]
    };


    const generatorPackages = hikeConfig.generators;
    const generators: object[] = [];
    generatorPackages.forEach((generatorPackageName: string) => {
        console.log(generatorPackageName);
        const generatorPackage = require(generatorPackageName);
        console.log(generatorPackage);
        generators.concat(generatorPackage);
    });

    // TODO: Build yargs
    // yargs
    //     .command(initApplicationCommand)
    //     .demandCommand()
    //     .showHelpOnFail(true)
    //     .recommendCommands()
    //     .strict()
    //     .help().argv;
    //
}

buildYargs().catch(console.log);


