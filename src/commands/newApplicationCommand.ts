import { Arguments, Argv, CommandModule } from 'yargs';
import NewApplicationGenerator from '../generators/new/NewApplicationGenerator';

const newApplicationGenerator = new NewApplicationGenerator();

const newApplicationCommand = {
    command: 'new <AppName>',
    aliases: ['n'],
    describe: 'Generate new application',
    builder: (yargs: Argv) => {
        return yargs.positional('AppName', {
            describe: 'Application name',
            type: 'string',
        });
    },
    handler: (args: Arguments) => {
        newApplicationGenerator.generate({
            appName: args.AppName,
        });
    },
} as CommandModule;

export default newApplicationCommand;