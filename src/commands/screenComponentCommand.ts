import { Arguments, Argv, CommandModule } from 'yargs';
import buildTemplateGenerator from '../generators/builders/TemplateGeneratorBuilder';
import TemplateGenerator, { TemplateGeneratorArgs } from '../generators/core/TemplateGenerator';
import upperCamelCase = require('uppercamelcase');

interface ScreenGeneratorArgs extends TemplateGeneratorArgs {
    screenName: string;
}

const screenGenerator: TemplateGenerator<ScreenGeneratorArgs> = buildTemplateGenerator<ScreenGeneratorArgs>({
    outputDirectory: './src/screens',
    fileExtension: 'tsx',
    templatePath: 'templates/Screen.mustache',
});

const screenCommand = {
    command: 'screen <ScreenName>',
    aliases: ['s'],
    describe: 'Add new scree',
    builder: (yargs: Argv) => {
        return yargs.positional('ScreenName', {
            describe: 'Screen name',
            type: 'string',
        });
    },
    handler: (args: Arguments) => {
        screenGenerator.generate({
            fileName: `${upperCamelCase(args.ScreenName)}Screen`,
            screenName: upperCamelCase(args.ScreenName)
        });
    },
} as CommandModule;

export default screenCommand;