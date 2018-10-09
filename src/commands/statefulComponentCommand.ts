import { Arguments, Argv, CommandModule } from 'yargs';
import buildTemplateGenerator from '../generators/builders/TemplateGeneratorBuilder';
import TemplateGenerator, { TemplateGeneratorArgs } from '../generators/core/TemplateGenerator';
import upperCamelCase = require('uppercamelcase');

interface ComponentGeneratorArgs extends TemplateGeneratorArgs {
    componentName: string;
}

const statefulComponentGenerator: TemplateGenerator<ComponentGeneratorArgs> = buildTemplateGenerator<ComponentGeneratorArgs>({
    outputDirectory: './src/components',
    fileExtension: 'tsx',
    templatePath: 'templates/StatefulComponent.mustache',
});

const statefulComponentCommand = {
    command: 'stateful <ComponentName>',
    aliases: ['sf'],
    describe: 'Add new stateful component',
    builder: (yargs: Argv) => {
        return yargs.positional('ComponentName', {
            describe: 'Component name',
            type: 'string',
        });
    },
    handler: (args: Arguments) => {
        statefulComponentGenerator.generate({
            fileName: upperCamelCase(args.ComponentName),
            componentName: upperCamelCase(args.ComponentName)
        });
    },
} as CommandModule;

export default statefulComponentCommand;
