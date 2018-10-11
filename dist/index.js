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
const fs = __importStar(require("fs"));
const HELP_STYLE = 'green';
const ERROR_STYLE = 'red';
const HIKE_CONFIG_NAME = "hike.json";
function readFile(path) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            reject(new Error("File does not exist"));
        }
        fs.readFile(path, "utf8", (err, data) => {
            if (err) {
                reject(new Error(`Couldn't read file ${path}`));
            }
            else {
                resolve(data);
            }
        });
    });
}
exports.readFile = readFile;
function buildYargs() {
    return __awaiter(this, void 0, void 0, function* () {
        yargonaut_1.default.helpStyle(HELP_STYLE).errorsStyle(ERROR_STYLE);
        const cwd = process.cwd();
        // const hikeConfig = JSON.parse(await readFile(path.join(cwd, HIKE_CONFIG_NAME)));
        const hikeConfig = {
            generators: [
                '@hyke/core'
            ]
        };
        const generatorPackages = hikeConfig.generators;
        const generators = [];
        generatorPackages.forEach((generatorPackageName) => {
            console.log(generatorPackageName);
            const generatorPackage = require(generatorPackageName);
            console.log(generatorPackage);
            generators.concat(generatorPackage);
        });
        // TODO: Build yargs
        // yargs
        //     .command(initApplicationCommand)
        //     .demandCommand()
        //     .showHelpOnFail(true)
        //     .recommendCommands()
        //     .strict()
        //     .help().argv;
        //
    });
}
buildYargs().catch(console.log);
//# sourceMappingURL=index.js.map