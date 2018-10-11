import * as fs from "fs";
import { Arguments, Argv, CommandModule } from "yargs";
import * as path from "path";
import { execute, readFile, writeToFile } from "../util";

const uppercamelcase = require("uppercamelcase");

const initCommand = {
    command: "init <AppName>",
    aliases: ["i"],
    describe: "Init new application",
    builder: (yargs: Argv) => {
        return yargs.positional("AppName", {
            describe: "Application name",
            type: "string",
        });
    },
    handler: async (args: Arguments) => {
        const cwd = process.cwd();
        const projectDir = path.join(cwd, args.AppName);
        if (fs.existsSync(projectDir)) {
            return console.log("Directory already exists");
        }
        fs.mkdirSync(projectDir);
        process.chdir(projectDir);
        await execute("yarn", ["add", "@hyke/core", "--dev"]);
        const hikeConfig = {
            appName: args.AppName,
            generators: [
                "@hyke/core"
            ],
        };
        await writeToFile(path.join(projectDir, "hike.json"), JSON.stringify(hikeConfig, null, 2));
    },
} as CommandModule;

export default initCommand;
