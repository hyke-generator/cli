"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator_1 = __importDefault(require("../core/BaseGenerator"));
const execute_1 = require("../../util/execute");
// @ts-ignore
const chalk_animation_1 = __importDefault(require("chalk-animation"));
// @ts-ignore
const chalk_1 = __importDefault(require("chalk"));
class NewApplicationGenerator extends BaseGenerator_1.default {
    generate(args) {
        chalk_animation_1.default.rainbow('Generating React Native application. Please wait...');
        execute_1.execute('react-native', ['init', args.appName, '--template', 'hike'])
            .then(() => execute_1.execute('node', [`${args.appName}/setup.js`]))
            .then(() => console.log(chalk_1.default.green('Application successfully generated.')))
            .catch(() => {
            console.log(chalk_1.default.red('Error while generating React Native application.'));
        });
    }
}
exports.default = NewApplicationGenerator;
//# sourceMappingURL=NewApplicationGenerator.js.map