#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const newApplicationCommand_1 = __importDefault(require("./commands/newApplicationCommand"));
const componentCommand_1 = __importDefault(require("./commands/componentCommand"));
// @ts-ignore
const yargonaut_1 = __importDefault(require("yargonaut"));
yargonaut_1.default
    .helpStyle('green')
    .errorsStyle('red');
yargs_1.default
    .command(newApplicationCommand_1.default)
    .command(componentCommand_1.default)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
//# sourceMappingURL=index.js.map