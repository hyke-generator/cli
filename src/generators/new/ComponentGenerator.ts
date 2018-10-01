import BaseGenerator from '../core/BaseGenerator';
import Mustache from 'mustache';
import { execute } from '../../util/execute';
import { mkdir, writeToFile } from '../../util/file';
import chalk from 'chalk';
import * as path from 'path';
import { getHikeDirectory } from '../../util/paths';

const requireText = require('require-text');

interface Args {
    componentName: string;
}

export default class ComponentGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        const directoryPath = './src/components';
        const componentName = args.componentName + '.tsx';

        const pathToTemplate = path.join(getHikeDirectory(), 'templates/component.mustache');
        const template = requireText(pathToTemplate, require);
        const result = Mustache.render(template, { componentName: args.componentName });

        mkdir(directoryPath)
            .then(() => writeToFile(path.join(directoryPath, componentName), result))
            .then(() => {
                console.log(chalk.green('Component generated!'));
                console.log(chalk.bold('PATH: ' + path.join(directoryPath, componentName)));
            })
            .catch((err: Error) => {
                return console.log(chalk.red(err.message));
            });

    }
}
