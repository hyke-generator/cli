import { Arguments, Argv, CommandModule } from 'yargs';
import buildTemplateGenerator from '../generators/builders/TemplateGeneratorBuilder';
import TemplateGenerator, { TemplateGeneratorArgs } from '../generators/core/TemplateGenerator';
import camelcase = require('camelcase');

interface ReducerGeneratorArgs extends TemplateGeneratorArgs {
    reducerName: string;
}

const reducerGenerator: TemplateGenerator<ReducerGeneratorArgs> = buildTemplateGenerator<ReducerGeneratorArgs>({
    outputDirectory: './src/reducers',
    fileExtension: 'ts',
    templatePath: 'templates/reducer.mustache',
});

const reducerCommand = {
    command: 'reducer <ReducerName>',
    aliases: ['s'],
    describe: 'Add new reducer',
    builder: (yargs: Argv) => {
        return yargs.positional('ReducerName', {
            describe: 'Reducer name',
            type: 'string',
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
