#!/usr/bin/env node
// @ts-ignore
import yargonaut from "yargonaut";
import yargs from "yargs";
import actionCommand from "./commands/actionCommand";
import newApplicationCommand from "./commands/newApplicationCommand";
import reducerCommand from "./commands/reducerCommand";
import screenCommand from "./commands/screenComponentCommand";
import stateCommand from "./commands/stateCommand";
import statefulComponentCommand from "./commands/statefulComponentCommand";
import statelessComponentCommand from "./commands/statelessComponentCommand";

yargonaut.helpStyle("green").errorsStyle("red");

// tslint:disable-next-line:no-unused-expression
yargs
    .command(newApplicationCommand)
    .command(statelessComponentCommand)
    .command(statefulComponentCommand)
    .command(actionCommand)
    .command(screenCommand)
    .command(reducerCommand)
    .command(stateCommand)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help().argv;
