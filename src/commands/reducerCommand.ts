import camelcase = require("camelcase");
import { Arguments, Argv, CommandModule } from "yargs";
import buildTemplateGenerator from "../generators/builders/TemplateGeneratorBuilder";
import TemplateGenerator, { ITemplateGeneratorArgs } from "../generators/core/TemplateGenerator";

interface IReducerGeneratorArgs extends ITemplateGeneratorArgs {
    reducerName: string;
}

const reducerGenerator: TemplateGenerator<IReducerGeneratorArgs> = buildTemplateGenerator<IReducerGeneratorArgs>({
    outputDirectory: "./src/reducers",
    fileExtension: "ts",
    templatePath: "templates/reducer.mustache",
});

const reducerCommand = {
    command: "reducer <ReducerName>",
    aliases: ["s"],
    describe: "Add new reducer",
    builder: (yargs: Argv) => {
        return yargs.positional("ReducerName", {
            describe: "Reducer name",
            type: "string",
        });
    },
    handler: (args: Arguments) => {
        reducerGenerator.generate({
            fileName: `${camelcase(args.ReducerName)}Reducer`,
            reducerName: `${camelcase(args.ReducerName)}`,
        });
    },
} as CommandModule;

export default reducerCommand;
