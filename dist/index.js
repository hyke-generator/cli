#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const yargonaut_1 = __importDefault(require("yargonaut"));
const initCommand_1 = __importDefault(require("./commands/initCommand"));
const yargs = __importStar(require("yargs"));
const addCommand_1 = __importDefault(require("./commands/addCommand"));
const util_1 = require("./util");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const HELP_STYLE = "green";
const ERROR_STYLE = "red";
const HIKE_CONFIG_NAME = "hike.json";
function buildYargs() {
    return __awaiter(this, void 0, void 0, function* () {
        yargonaut_1.default.helpStyle(HELP_STYLE).errorsStyle(ERROR_STYLE);
        const cwd = process.cwd();
        if (!fs.existsSync(path.join(cwd, HIKE_CONFIG_NAME))) {
            yargs.command(initCommand_1.default);
        }
        else {
            yargs.command(addCommand_1.default);
            const hikeConfig = JSON.parse(yield util_1.readFile(path.join(cwd, HIKE_CONFIG_NAME)));
            const generatorPackages = hikeConfig.generators;
            generatorPackages.forEach((generatorPackageName) => {
                console.log(generatorPackageName);
                const generatorPackage = require(generatorPackageName);
                const commandNames = Object.keys(generatorPackage);
                commandNames.forEach(name => {
                    const command = generatorPackage[name];
                    yargs.command(command);
                });
            });
        }
        yargs.demandCommand()
            .showHelpOnFail(true)
            .recommendCommands()
            .strict()
            .help().argv;
    });
}
buildYargs().catch(console.log);
//# sourceMappingURL=index.js.map