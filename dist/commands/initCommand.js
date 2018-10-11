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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const util_1 = require("../util");
const uppercamelcase = require("uppercamelcase");
const initCommand = {
    command: "init <AppName>",
    aliases: ["i"],
    describe: "Init new application",
    builder: (yargs) => {
        return yargs.positional("AppName", {
            describe: "Application name",
            type: "string",
        });
    },
    handler: (args) => __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const projectDir = path.join(cwd, args.AppName);
        if (fs.existsSync(projectDir)) {
            return console.log("Directory already exists");
        }
        fs.mkdirSync(projectDir);
        process.chdir(projectDir);
        yield util_1.execute("yarn", ["add", "@hyke/core", "--dev"]);
        const packageJson = JSON.parse(yield util_1.readFile(path.join(projectDir, "package.json")));
        const hikeConfig = {
            appName: args.AppName,
            generators: {
                "@hyke/cli": packageJson.devDependencies["@hyke/core"],
            },
        };
        yield util_1.writeToFile(path.join(projectDir, "hike.json"), JSON.stringify(hikeConfig, null, 2));
    }),
};
exports.default = initCommand;
//# sourceMappingURL=initCommand.js.map