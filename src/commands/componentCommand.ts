import { Arguments, Argv, CommandModule } from 'yargs';
import ComponentGenerator from '../generators/new/ComponentGenerator';

const componentGenerator = new ComponentGenerator();

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
        console.log(args);
        componentGenerator.generate({
            componentName: args.ComponentName,
        });
    },
} as CommandModule;

export default componentCommand;
