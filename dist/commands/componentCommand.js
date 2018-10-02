"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const componentGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: './src/components',
    fileExtension: 'tsx',
    templatePath: 'templates/component.mustache',
});
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
            fileName: args.ComponentName,
        });
    },
};
exports.default = componentCommand;
//# sourceMappingURL=componentCommand.js.map