#!/usr/bin/env node
import yargs from 'yargs';
import newApplicationCommand from './commands/newApplicationCommand';
import statelessComponentCommand from './commands/statelessComponentCommand';
import statefulComponentCommand from './commands/statefulComponentCommand';
// @ts-ignore
import yargonaut from 'yargonaut';
import actionCommand from './commands/actionCommand';
import screenCommand from './commands/screenComponentCommand';
import reducerCommand from './commands/reducerCommand';

yargonaut
    .helpStyle('green')
    .errorsStyle('red');

yargs
    .command(newApplicationCommand)
    .command(statelessComponentCommand)
    .command(statefulComponentCommand)
    .command(actionCommand)
    .command(screenCommand)
    .command(reducerCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
