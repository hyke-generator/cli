import upperCamelCase = require("uppercamelcase");
import { Arguments, Argv, CommandModule } from "yargs";
import buildTemplateGenerator from "../generators/builders/TemplateGeneratorBuilder";
import TemplateGenerator, { ITemplateGeneratorArgs } from "../generators/core/TemplateGenerator";

interface IScreenGeneratorArgs extends ITemplateGeneratorArgs {
    screenName: string;
}

const screenGenerator: TemplateGenerator<IScreenGeneratorArgs> = buildTemplateGenerator<IScreenGeneratorArgs>({
    outputDirectory: "./src/screens",
    fileExtension: "tsx",
    templatePath: "templates/Screen.mustache",
});

const screenCommand = {
    command: "screen <ScreenName>",
    aliases: ["s"],
    describe: "Add new scree",
    builder: (yargs: Argv) => {
        return yargs.positional("ScreenName", {
            describe: "Screen name",
            type: "string",
        });
    },
    handler: (args: Arguments) => {
        screenGenerator.generate({
            fileName: `${upperCamelCase(args.ScreenName)}Screen`,
            screenName: upperCamelCase(args.ScreenName),
        });
    },
} as CommandModule;

export default screenCommand;
