"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TemplateGenerator_1 = __importDefault(require("../core/TemplateGenerator"));
class ComponentGenerator extends TemplateGenerator_1.default {
    getOutputDirectory() {
        return './src/components';
    }
    getFileExtension() {
        return 'tsx';
    }
    getTemplatePath() {
        return 'templates/component.mustache';
    }
}
exports.default = ComponentGenerator;
//# sourceMappingURL=ComponentGenerator.js.map