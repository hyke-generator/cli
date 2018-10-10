import upperCamelCase = require("uppercamelcase");
import { Arguments, Argv, CommandModule } from "yargs";
import buildTemplateGenerator from "../generators/builders/TemplateGeneratorBuilder";
import TemplateGenerator, { TemplateGeneratorArgs } from "../generators/core/TemplateGenerator";

interface ComponentGeneratorArgs extends TemplateGeneratorArgs {
    componentName: string;
}

const componentGenerator: TemplateGenerator<ComponentGeneratorArgs> = buildTemplateGenerator<ComponentGeneratorArgs>({
    outputDirectory: "./src/components",
    fileExtension: "tsx",
    templatePath: "templates/StatelessComponent.mustache",
});

const statelessComponentCommand = {
    command: "stateless <ComponentName>",
    aliases: ["sl"],
    describe: "Add new stateless component",
    builder: (yargs: Argv) => {
        return yargs.positional("ComponentName", {
            describe: "Component name",
            type: "string",
        });
    },
    handler: (args: Arguments) => {
        componentGenerator.generate({
            fileName: upperCamelCase(args.ComponentName),
            componentName: upperCamelCase(args.ComponentName),
        });
    },
} as CommandModule;

export default statelessComponentCommand;
