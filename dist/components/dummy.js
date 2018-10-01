"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const dummy = () => <react_native_1.View style={styles.container}>
        <react_native_1.Text>dummy</react_native_1.Text>
    </react_native_1.View>;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    }
});
exports.default = dummy;
//# sourceMappingURL=dummy.js.map