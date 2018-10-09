#!/usr/bin/env node
import yargs from 'yargs';
import newApplicationCommand from './commands/newApplicationCommand';
import statelessComponentCommand from './commands/statelessComponentCommand';
import statefulComponentCommand from './commands/statefulComponentCommand';
// @ts-ignore
import yargonaut from 'yargonaut';

yargonaut
    .helpStyle('green')
    .errorsStyle('red');

yargs
    .command(newApplicationCommand)
    .command(statelessComponentCommand)
    .command(statefulComponentCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
