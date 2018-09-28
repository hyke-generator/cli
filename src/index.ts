#!/usr/bin/env node
import yargs, { Arguments, Argv } from 'yargs';

yargs
    .command('generate <AppName>', 'Generate new application',
        (yargs: Argv) => {
            return yargs.positional('AppName', {
                describe: 'Application name',
                type: 'string',
            });
        }, (args: Arguments) => {
            console.log(`Generating application <${args.AppName}>`);
        })

    .demandCommand()
    .showHelpOnFail(true)
    .strict()
    .help()
    .argv;