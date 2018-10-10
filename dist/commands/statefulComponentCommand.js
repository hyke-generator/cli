"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const upperCamelCase = require("uppercamelcase");
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const statefulComponentGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: "./src/components",
    fileExtension: "tsx",
    templatePath: "templates/StatefulComponent.mustache",
});
const statefulComponentCommand = {
    command: "stateful <ComponentName>",
    aliases: ["sf"],
    describe: "Add new stateful component",
    builder: (yargs) => {
        return yargs.positional("ComponentName", {
            describe: "Component name",
            type: "string",
        });
    },
    handler: (args) => {
        statefulComponentGenerator.generate({
            fileName: upperCamelCase(args.ComponentName),
            componentName: upperCamelCase(args.ComponentName),
        });
    },
};
exports.default = statefulComponentCommand;
//# sourceMappingURL=statefulComponentCommand.js.map