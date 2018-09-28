"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseGenerator_1 = __importDefault(require("../core/BaseGenerator"));
class NewApplicationGenerator extends BaseGenerator_1.default {
    generate(args) {
        console.log(`Generating ${args.appName}`);
    }
}
exports.default = NewApplicationGenerator;
//# sourceMappingURL=NewApplicationGenerator.js.map