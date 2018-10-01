import BaseGenerator from '../core/BaseGenerator';
import Mustache from 'mustache';
import * as fs from 'fs';
import { execute } from '../../util/execute';
import chalk from 'chalk';

interface Args {
    componentName: string;
}

export default class ComponentGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        const template = fs.readFileSync('./templates/component.mustache').toString();
        const result = Mustache.render(template, {componentName: args.componentName});
        const directoryPath = './src/components';
        const componentName = args.componentName + '.tsx';
        execute('mkdir', ['-p', directoryPath]).then(() => {
            fs.writeFile(directoryPath + '/' + componentName, result, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log(chalk.green('Component generated!'));
                console.log(chalk.bold('PATH: ' + directoryPath + '/' + componentName));
            });
        });

    }
}
