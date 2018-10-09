import { Arguments, Argv, CommandModule } from 'yargs';
import buildTemplateGenerator from '../generators/builders/TemplateGeneratorBuilder';
import TemplateGenerator, { TemplateGeneratorArgs } from '../generators/core/TemplateGenerator';

interface ComponentGeneratorArgs extends TemplateGeneratorArgs {
}

const componentGenerator: TemplateGenerator<ComponentGeneratorArgs> = buildTemplateGenerator<ComponentGeneratorArgs>({
    outputDirectory: './src/components',
    fileExtension: 'tsx',
    templatePath: 'templates/StatefulComponent.mustache',
});

const statelessComponentCommand = {
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
        componentGenerator.generate({
            fileName: args.ComponentName,
        });
    },
} as CommandModule;

export default statelessComponentCommand;
