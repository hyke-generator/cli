"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NewApplicationGenerator_1 = __importDefault(require("../generators/new/NewApplicationGenerator"));
var newApplicationGenerator = new NewApplicationGenerator_1.default();
var newApplicationCommand = {
    command: 'new <AppName>',
    aliases: ['n'],
    describe: 'Generate new application',
    builder: function (yargs) {
        return yargs.positional('AppName', {
            describe: 'Application name',
            type: 'string',
        });
    },
    handler: function (args) {
        newApplicationGenerator.generate({
            appName: args.AppName,
        });
    },
};
exports.default = newApplicationCommand;
//# sourceMappingURL=newApplicationCommand.js.map