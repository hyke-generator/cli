"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelcase_1 = __importDefault(require("camelcase"));
const decamelize_1 = __importDefault(require("decamelize"));
const uppercamelcase_1 = __importDefault(require("uppercamelcase"));
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const actionGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: "./src/actions",
    fileExtension: "ts",
    templatePath: "templates/action.mustache",
});
const actionCommand = {
    command: "action  <ActionName>",
    aliases: ["a"],
    describe: "Add new action",
    builder: (yargs) => {
        return yargs.positional("ActionName", {
            describe: "Action name",
            type: "string",
        });
    },
    handler: (args) => {
        actionGenerator.generate({
            fileName: args.ActionName,
            actionNameLowerCamelCase: camelcase_1.default(args.ActionName),
            actionNameUpperCamelCase: uppercamelcase_1.default(args.ActionName),
            actionNameUpperUnderscore: decamelize_1.default(args.ActionName).toUpperCase(),
        });
    },
};
exports.default = actionCommand;
//# sourceMappingURL=actionCommand.js.map