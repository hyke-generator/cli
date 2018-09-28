#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
var newApplicationCommand_1 = __importDefault(require("./commands/newApplicationCommand"));
yargs_1.default
    .command(newApplicationCommand_1.default)
    .demandCommand()
    .showHelpOnFail(true)
    .recommendCommands()
    .strict()
    .help()
    .argv;
//# sourceMappingURL=index.js.map