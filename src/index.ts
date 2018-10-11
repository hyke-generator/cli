#!/usr/bin/env node
// @ts-ignore
import yargonaut from "yargonaut";
import initCommand from "./commands/initCommand";
import * as yargs from "yargs";
import addCommand from "./commands/addCommand";
import { readFile } from "./util";
import * as path from "path";

const HELP_STYLE = "green";
const ERROR_STYLE = "red";
const HIKE_CONFIG_NAME = "hike.json";

async function buildYargs() {
    yargonaut.helpStyle(HELP_STYLE).errorsStyle(ERROR_STYLE);
    const cwd = process.cwd();
    const hikeConfig = JSON.parse(await readFile(path.join(cwd, HIKE_CONFIG_NAME)));

    // const hikeConfig = {
    //     generators: [
    //         "@hyke/core",
    //     ],
    // };

    const generatorPackages = hikeConfig.generators;
    yargs.command(initCommand);
    yargs.command(addCommand);

    generatorPackages.forEach((generatorPackageName: string) => {
        const generatorPackage = require(generatorPackageName);
        const commandNames = Object.keys(generatorPackage);

        commandNames.forEach(name => {
            const command = generatorPackage[name];
            yargs.command(command);
        });

    });

    yargs.demandCommand()
        .showHelpOnFail(true)
        .recommendCommands()
        .strict()
        .help().argv;
}

buildYargs().catch(console.log);


