#!/usr/bin/env node
import yargs from 'yargs';
import newApplicationCommand from './commands/newApplicationCommand';

yargs
    .command(newApplicationCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;