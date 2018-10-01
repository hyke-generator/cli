import BaseGenerator from '../core/BaseGenerator';
import Mustache from 'mustache';
import { execute } from '../../util/execute';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
const requireText = require('require-text');

interface Args {
    componentName: string;
}

export default class ComponentGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {

        const directoryPath = './src/components';
        const componentName = args.componentName + '.tsx';

        const pathToTemplate = path.join(__dirname, '..', '..', '..', 'templates/component.mustache');
        const template = requireText(pathToTemplate, require);
        const result = Mustache.render(template, {componentName: args.componentName});
        execute('mkdir', ['-p', directoryPath]).then(() => {
            fs.writeFile(directoryPath + '/' + componentName, result, (err) => {
                if(err) {
                    return console.log(err);
                }
                console.log(chalk.green('Component generated!'));
                console.log(chalk.bold('PATH: ' + directoryPath + '/' + componentName));
            });
        });

    }
}
