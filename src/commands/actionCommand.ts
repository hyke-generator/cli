import camelcase from "camelcase";
import decamelize from "decamelize";
import uppercamelcase from "uppercamelcase";
import { Arguments, Argv, CommandModule } from "yargs";
import buildTemplateGenerator from "../generators/builders/TemplateGeneratorBuilder";
import TemplateGenerator, { TemplateGeneratorArgs } from "../generators/core/TemplateGenerator";

interface ComponentGeneratorArgs extends TemplateGeneratorArgs {
    actionNameUpperUnderscore: string;
    actionNameUpperCamelCase: string;
    actionNameLowerCamelCase: string;
}

const actionGenerator: TemplateGenerator<ComponentGeneratorArgs> = buildTemplateGenerator<ComponentGeneratorArgs>({
    outputDirectory: "./src/actions",
    fileExtension: "ts",
    templatePath: "templates/action.mustache",
});

const actionCommand = {
    command: "action  <ActionName>",
    aliases: ["a"],
    describe: "Add new action",
    builder: (yargs: Argv) => {
        return yargs.positional("ActionName", {
            describe: "Action name",
            type: "string",
        });
    },
    handler: (args: Arguments) => {
        actionGenerator.generate({
            fileName: args.ActionName,
            actionNameLowerCamelCase: camelcase(args.ActionName),
            actionNameUpperCamelCase: uppercamelcase(args.ActionName),
            actionNameUpperUnderscore: decamelize(args.ActionName).toUpperCase(),
        });
    },
} as CommandModule;

export default actionCommand;
