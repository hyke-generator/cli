#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
// @ts-ignore
import yargonaut from "yargonaut";
import * as yargs from "yargs";
import addCommand from "./commands/addCommand";
import initCommand from "./commands/initCommand";
import { readFile } from "./util";

const HELP_STYLE = "green";
const ERROR_STYLE = "red";
const HIKE_CONFIG_NAME = "hike.json";

async function buildYargs() {
    yargonaut.helpStyle(HELP_STYLE).errorsStyle(ERROR_STYLE);
    const cwd = process.cwd();

    if (!fs.existsSync(path.join(cwd, HIKE_CONFIG_NAME))) {
        yargs.command(initCommand);
    } else {
        yargs.command(addCommand);
        const hikeConfig = JSON.parse(await readFile(path.join(cwd, HIKE_CONFIG_NAME)));
        const generatorPackages = hikeConfig.generators;

        generatorPackages.forEach((generatorPackageName: string) => {
            console.log(generatorPackageName);
            const generatorPackage = require(path.join(process.cwd(), "node_modules", generatorPackageName));
            const commandNames = Object.keys(generatorPackage);
            commandNames.forEach((name) => {
                const command = generatorPackage[name];
                yargs.command(command);
            });
        });
    }

    const commands = yargs
        .demandCommand()
        .showHelpOnFail(true)
        .recommendCommands()
        .strict()
        .help().argv;
}

buildYargs().catch(console.log);
