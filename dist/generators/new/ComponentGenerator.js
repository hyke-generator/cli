"use strict";
<<<<<<< HEAD
=======
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
const fs = __importStar(require("fs"));
const execute_1 = require("../../util/execute");
const chalk_1 = __importDefault(require("chalk"));
class ComponentGenerator extends BaseGenerator_1.default {
    generate(args) {
        const template = fs.readFileSync('./templates/component.mustache').toString();
        const result = mustache_1.default.render(template, { componentName: args.componentName });
        const directoryPath = './src/components';
        const componentName = args.componentName + '.tsx';
        execute_1.execute('mkdir', ['-p', directoryPath]).then(() => {
            fs.writeFile(directoryPath + '/' + componentName, result, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(chalk_1.default.green('Component generated!'));
                console.log(chalk_1.default.bold('PATH: ' + directoryPath + '/' + componentName));
            });
        });
    }
}
exports.default = ComponentGenerator;
>>>>>>> Added stateless component generator
//# sourceMappingURL=ComponentGenerator.js.map