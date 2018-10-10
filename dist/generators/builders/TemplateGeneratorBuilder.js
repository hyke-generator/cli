"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateGenerator_1 = __importDefault(require("../core/TemplateGenerator"));
function buildTemplateGenerator(args) {
    return new class Generator extends TemplateGenerator_1.default {
        getFileExtension() {
            return args.fileExtension;
        }
        getOutputDirectory() {
            return args.outputDirectory;
        }
        getTemplatePath() {
            return args.templatePath;
        }
    }();
}
exports.default = buildTemplateGenerator;
//# sourceMappingURL=TemplateGeneratorBuilder.js.map