#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargonaut_1 = __importDefault(require("yargonaut"));
const yargs_1 = __importDefault(require("yargs"));
const actionCommand_1 = __importDefault(require("./commands/actionCommand"));
const newApplicationCommand_1 = __importDefault(require("./commands/newApplicationCommand"));
const reducerCommand_1 = __importDefault(require("./commands/reducerCommand"));
const screenComponentCommand_1 = __importDefault(require("./commands/screenComponentCommand"));
const stateCommand_1 = __importDefault(require("./commands/stateCommand"));
const statefulComponentCommand_1 = __importDefault(require("./commands/statefulComponentCommand"));
const statelessComponentCommand_1 = __importDefault(require("./commands/statelessComponentCommand"));
yargonaut_1.default.helpStyle("green").errorsStyle("red");
// tslint:disable-next-line:no-unused-expression
yargs_1.default
    .command(newApplicationCommand_1.default)
    .command(statelessComponentCommand_1.default)
    .command(statefulComponentCommand_1.default)
    .command(actionCommand_1.default)
    .command(screenComponentCommand_1.default)
    .command(reducerCommand_1.default)
    .command(stateCommand_1.default)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help().argv;
//# sourceMappingURL=index.js.map