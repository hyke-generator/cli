"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camelcase = require("camelcase");
const TemplateGeneratorBuilder_1 = __importDefault(require("../generators/builders/TemplateGeneratorBuilder"));
const reducerGenerator = TemplateGeneratorBuilder_1.default({
    outputDirectory: "./src/reducers",
    fileExtension: "ts",
    templatePath: "templates/reducer.mustache",
});
const reducerCommand = {
    command: "reducer <ReducerName>",
    aliases: ["s"],
    describe: "Add new reducer",
    builder: (yargs) => {
        return yargs.positional("ReducerName", {
            describe: "Reducer name",
            type: "string",
        });
    },
    handler: (args) => {
        reducerGenerator.generate({
            fileName: `${camelcase(args.ReducerName)}Reducer`,
            reducerName: `${camelcase(args.ReducerName)}`,
        });
    },
};
exports.default = reducerCommand;
//# sourceMappingURL=reducerCommand.js.map