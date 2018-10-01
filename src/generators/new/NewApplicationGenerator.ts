import BaseGenerator from '../core/BaseGenerator';
import { execute } from '../../util/execute';
// @ts-ignore
import chalkAnimation from 'chalk-animation';
// @ts-ignore
import chalk from 'chalk';
import * as path from 'path';

interface Args {
    appName: string;
}

export default class NewApplicationGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        chalkAnimation.rainbow('Generating React Native application. Please wait...');
        const reactNativeCliPath = path.join(
            __dirname,
            '..',
            '..',
            '..',
            'node_modules',
            'react-native-cli',
            'index.js',
        );
        execute('node', [reactNativeCliPath, 'init', args.appName, '--template', 'hike'])
            .then(() => execute('node', [`${args.appName}/setup.js`]))
            .then(() => console.log(chalk.green('Application successfully generated.')))
            .catch(() => {
                console.log(chalk.red('Error while generating React Native application.'));
            });
    }
}