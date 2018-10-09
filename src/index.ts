#!/usr/bin/env node
import yargs from 'yargs';
import newApplicationCommand from './commands/newApplicationCommand';
import generateStatelessComponentCommand from './commands/statelessComponentCommand';
// @ts-ignore
import yargonaut from 'yargonaut';

yargonaut
    .helpStyle('green')
    .errorsStyle('red');

yargs
    .command(newApplicationCommand)
    .command(generateStatelessComponentCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
