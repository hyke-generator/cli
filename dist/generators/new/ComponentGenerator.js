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
const fs = __importStar(require("fs"));
class ComponentGenerator extends BaseGenerator_1.default {
    generate(args) {
        const template = fs.readFileSync('./templates/component.mustache').toString();
        const result = mustache_1.default.render(template, { componentName: args.componentName });
        console.log(result);
        fs.writeFile(args.componentName + ".tsx", result, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Component generated!");
        });
    }
}
exports.default = ComponentGenerator;
//# sourceMappingURL=ComponentGenerator.js.map