"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const util_1 = require("../util");
const uppercamelcase = require("uppercamelcase");
const addCommand = {
    command: "add <GeneratorName>",
    aliases: ["a"],
    describe: "Add new generator",
    builder: (yargs) => {
        return yargs.positional("GeneratorName", {
            describe: "Generator name",
            type: "string",
        });
    },
    handler: (args) => __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        yield util_1.execute("yarn", ["add", args.GeneratorName, "--dev"]);
        const packageJson = JSON.parse(yield util_1.readFile(path.join(cwd, "package.json")));
        const hikeConfig = JSON.parse(yield util_1.readFile(path.join(cwd, "hike.json")));
        hikeConfig.generators[args.GeneratorName] = packageJson.devDependencies[args.GeneratorName];
        yield util_1.writeToFile(path.join(cwd, "hike.json"), JSON.stringify(hikeConfig, null, 2));
    }),
};
exports.default = addCommand;
//# sourceMappingURL=addCommand.js.map