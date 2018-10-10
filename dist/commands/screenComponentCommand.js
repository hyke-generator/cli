"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upperCamelCase = require("uppercamelcase");
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const screenGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: "./src/screens",
    fileExtension: "tsx",
    templatePath: "templates/Screen.mustache",
});
const screenCommand = {
    command: "screen <ScreenName>",
    aliases: ["s"],
    describe: "Add new scree",
    builder: (yargs) => {
        return yargs.positional("ScreenName", {
            describe: "Screen name",
            type: "string",
        });
    },
    handler: (args) => {
        screenGenerator.generate({
            fileName: `${upperCamelCase(args.ScreenName)}Screen`,
            screenName: upperCamelCase(args.ScreenName),
        });
    },
};
exports.default = screenCommand;
//# sourceMappingURL=screenComponentCommand.js.map