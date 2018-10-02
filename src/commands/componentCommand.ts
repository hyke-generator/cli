import { Arguments, Argv, CommandModule } from 'yargs';
import buildTemplateGenerator from '../generators/builders/TemplateGeneratorBuilder';
import { TemplateGeneratorArgs } from '../generators/core/TemplateGenerator';

const componentGenerator = buildTemplateGenerator<TemplateGeneratorArgs>({
    outputDirectory: './src/components',
    fileExtension: 'tsx',
    templatePath: 'templates/component.mustache',
});

const componentCommand = {
    command: 'component <ComponentName>',
    aliases: ['c'],
    describe: 'Add new component',
    builder: (yargs: Argv) => {
        return yargs.positional('ComponentName', {
            describe: 'Component name',
            type: 'string',
        });
    },
    handler: (args: Arguments) => {
        componentGenerator.generate({
            fileName: args.ComponentName,
        });
    },
} as CommandModule;

export default componentCommand;
