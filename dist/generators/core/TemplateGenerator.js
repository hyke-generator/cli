"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const mustache_1 = __importDefault(require("mustache"));
const path = __importStar(require("path"));
// @ts-ignore
const require_text_1 = __importDefault(require("require-text"));
const file_1 = require("../../util/file");
const paths_1 = require("../../util/paths");
const BaseGenerator_1 = __importDefault(require("./BaseGenerator"));
class TemplateGenerator extends BaseGenerator_1.default {
    generate(args) {
        const directoryPath = this.getOutputDirectory();
        const fileExtension = this.getFileExtension();
        const templatePath = this.getTemplatePath();
        const componentName = `${args.fileName}.${fileExtension}`;
        const pathToTemplate = path.join(paths_1.getHikeDirectory(), templatePath);
        const template = require_text_1.default(pathToTemplate, require);
        const result = mustache_1.default.render(template, Object.assign({}, args, { extension: fileExtension }));
        file_1.mkdir(directoryPath)
            .then(() => file_1.writeToFile(path.join(directoryPath, componentName), result))
            .then(() => {
            console.log(chalk_1.default.green("Component generated!"));
            console.log(chalk_1.default.bold(`PATH: ${path.join(directoryPath, componentName)}`));
        })
            .catch((err) => console.log(chalk_1.default.red(err.message)));
    }
}
exports.default = TemplateGenerator;
//# sourceMappingURL=TemplateGenerator.js.map