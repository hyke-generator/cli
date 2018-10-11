import { Arguments, Argv, CommandModule } from "yargs";
import * as path from "path";
import { execute, readFile, writeToFile } from "../util";

const addCommand = {
    command: "add <GeneratorName>",
    aliases: ["a"],
    describe: "Add new generator",
    builder: (yargs: Argv) => {
        return yargs.positional("GeneratorName", {
            describe: "Generator name",
            type: "string",
        });
    },
    handler: async (args: Arguments) => {
        const cwd = process.cwd();
        await execute("yarn", ["add", args.GeneratorName, "--dev"]);
        const hikeConfig = JSON.parse(await readFile(path.join(cwd, "hike.json")));
        hikeConfig.generators.push(args.GeneratorName);
        await writeToFile(path.join(cwd, "hike.json"), JSON.stringify(hikeConfig, null, 2));
    },
} as CommandModule;

export default addCommand;
