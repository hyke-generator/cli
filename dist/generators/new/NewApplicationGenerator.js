"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseGenerator_1 = __importDefault(require("../core/BaseGenerator"));
var NewApplicationGenerator = /** @class */ (function (_super) {
    __extends(NewApplicationGenerator, _super);
    function NewApplicationGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewApplicationGenerator.prototype.generate = function (args) {
        console.log("Generating " + args.appName);
    };
    return NewApplicationGenerator;
}(BaseGenerator_1.default));
exports.default = NewApplicationGenerator;
//# sourceMappingURL=NewApplicationGenerator.js.map