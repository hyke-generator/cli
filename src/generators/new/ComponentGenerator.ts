import BaseGenerator from '../core/BaseGenerator';
import Mustache from 'mustache';
import { execute } from '../../util/execute';
import { writeToFile } from '../../util/file';
import chalk from 'chalk';
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
            writeToFile(directoryPath + '/' + componentName, result).then(() => {
                console.log(chalk.green('Component generated!'));
                console.log(chalk.bold('PATH: ' + directoryPath + '/' + componentName));
            });
        });

    }
}
