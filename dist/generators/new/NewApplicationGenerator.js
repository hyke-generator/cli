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
const execute_1 = require("../../util/execute");
// @ts-ignore
const chalk_animation_1 = __importDefault(require("chalk-animation"));
// @ts-ignore
const chalk_1 = __importDefault(require("chalk"));
const path = __importStar(require("path"));
const paths_1 = require("../../util/paths");
class NewApplicationGenerator extends BaseGenerator_1.default {
    generate(args) {
        chalk_animation_1.default.rainbow('Generating React Native application. Please wait...');
        const reactNativeCliPath = path.join(paths_1.getNodeModulesDirectory(), 'react-native-cli', 'index.js');
        execute_1.execute('node', [reactNativeCliPath, 'init', args.appName, '--template', 'hike'])
            .then(() => execute_1.execute('node', [`${args.appName}/setup.js`]))
            .then(() => console.log(chalk_1.default.green('Application successfully generated.')))
            .catch(() => {
            console.log(chalk_1.default.red('Error while generating React Native application.'));
        });
    }
}
exports.default = NewApplicationGenerator;
//# sourceMappingURL=NewApplicationGenerator.js.map