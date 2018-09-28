import BaseGenerator from '../core/BaseGenerator';
import { execute } from '../../util/execute';
// @ts-ignore
import chalkAnimation from 'chalk-animation';
// @ts-ignore
import chalk from 'chalk';

interface Args {
    appName: string;
}

export default class NewApplicationGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        chalkAnimation.rainbow('Generating React Native application. Please wait...');
        execute('react-native', ['init', args.appName])
            .then(() => {
                console.log(chalk.green('Application successfully generated.'));
            })
            .catch(() => {
                console.log(chalk.red('Error while generating React Native application.'));
            });
    }
}