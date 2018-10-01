#!/usr/bin/env node
import yargs from 'yargs';
import newApplicationCommand from './commands/newApplicationCommand';
import componentCommand from './commands/componentCommand';
// @ts-ignore
import yargonaut from 'yargonaut';

yargonaut
    .helpStyle('green')
    .errorsStyle('red');

yargs
    .command(newApplicationCommand)
    .command(componentCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
