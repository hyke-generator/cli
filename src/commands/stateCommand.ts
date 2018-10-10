import upperCamelCase = require("uppercamelcase");
import { Arguments, Argv, CommandModule } from "yargs";
import buildTemplateGenerator from "../generators/builders/TemplateGeneratorBuilder";
import TemplateGenerator, { TemplateGeneratorArgs } from "../generators/core/TemplateGenerator";

interface StateGeneratorArgs extends TemplateGeneratorArgs {
    stateName: string;
}

const stateGenerator: TemplateGenerator<StateGeneratorArgs> = buildTemplateGenerator<StateGeneratorArgs>({
    outputDirectory: "./src/types",
    fileExtension: "ts",
    templatePath: "templates/state.mustache",
});

const stateCommand = {
    command: "state <StateName>",
    aliases: ["s"],
    describe: "Add new state",
    builder: (yargs: Argv) => {
        return yargs.positional("StateName", {
            describe: "State name",
            type: "string",
        });
    },
    handler: (args: Arguments) => {
        stateGenerator.generate({
            fileName: `${upperCamelCase(args.StateName)}State`,
            stateName: `${upperCamelCase(args.StateName)}`,
        });
    },
} as CommandModule;

export default stateCommand;
