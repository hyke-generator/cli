"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewApplicationGenerator_1 = __importDefault(require("../generators/new/NewApplicationGenerator"));
const newApplicationGenerator = new NewApplicationGenerator_1.default();
const newApplicationCommand = {
    command: "new <AppName>",
    aliases: ["n"],
    describe: "Generate new application",
    builder: (yargs) => {
        return yargs
            .positional("AppName", {
            describe: "Application name",
            type: "string",
        })
            .option("verbose", {
            describe: "Verbose output to console",
            type: "boolean",
        });
    },
    handler: (args) => {
        newApplicationGenerator.generate({
            appName: args.AppName,
            verbose: args.verbose,
        });
    },
};
exports.default = newApplicationCommand;
//# sourceMappingURL=newApplicationCommand.js.map