"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentGenerator_1 = __importDefault(require("../generators/new/ComponentGenerator"));
const componentGenerator = new ComponentGenerator_1.default();
const componentCommand = {
    command: 'component <ComponentName>',
    aliases: ['c'],
    describe: 'Add new component',
    builder: (yargs) => {
        return yargs.positional('ComponentName', {
            describe: 'Component name',
            type: 'string',
        });
    },
    handler: (args) => {
        componentGenerator.generate({
            componentName: args.ComponentName,
        });
    },
};
exports.default = componentCommand;
//# sourceMappingURL=componentCommand.js.map