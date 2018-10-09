"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const upperCamelCase = require("uppercamelcase");
const stateGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: './src/types',
    fileExtension: 'ts',
    templatePath: 'templates/state.mustache',
});
const stateCommand = {
    command: 'state <StateName>',
    aliases: ['s'],
    describe: 'Add new state',
    builder: (yargs) => {
        return yargs.positional('StateName', {
            describe: 'State name',
            type: 'string',
        });
    },
    handler: (args) => {
        stateGenerator.generate({
            fileName: `${upperCamelCase(args.StateName)}State`,
            stateName: `${upperCamelCase(args.StateName)}`,
        });
    },
};
exports.default = stateCommand;
//# sourceMappingURL=stateCommand.js.map