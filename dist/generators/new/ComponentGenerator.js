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
const BaseGenerator_1 = __importDefault(require("../core/BaseGenerator"));
const mustache_1 = __importDefault(require("mustache"));
const execute_1 = require("../../util/execute");
const file_1 = require("../../util/file");
const chalk_1 = __importDefault(require("chalk"));
const path = __importStar(require("path"));
const requireText = require('require-text');
class ComponentGenerator extends BaseGenerator_1.default {
    generate(args) {
        const directoryPath = './src/components';
        const componentName = args.componentName + '.tsx';
        const pathToTemplate = path.join(__dirname, '..', '..', '..', 'templates/component.mustache');
        const template = requireText(pathToTemplate, require);
        const result = mustache_1.default.render(template, { componentName: args.componentName });
        execute_1.execute('mkdir', ['-p', directoryPath]).then(() => {
<<<<<<< HEAD
            fs.writeFile(directoryPath + '/' + componentName, result, (err) => {
                if (err) {
                    return console.log(err);
                }
=======
            file_1.writeToFile(directoryPath + '/' + componentName, result).then(() => {
>>>>>>> Promise based file creation
                console.log(chalk_1.default.green('Component generated!'));
                console.log(chalk_1.default.bold('PATH: ' + directoryPath + '/' + componentName));
            });
        });
    }
}
exports.default = ComponentGenerator;
//# sourceMappingURL=ComponentGenerator.js.map