import BaseGenerator from './BaseGenerator';
import * as path from 'path';
import { getHikeDirectory } from '../../util/paths';
import Mustache from 'mustache';
import { mkdir, writeToFile } from '../../util/file';
import chalk from 'chalk';

const requireText = require('require-text');

interface Args {
    fileName: string;
}

export default abstract class TemplateGenerator<T extends Args> extends BaseGenerator<Args> {

    generate(args: Args): void {
        const directoryPath = this.getOutputDirectory();
        const fileExtension = this.getFileExtension();
        let templatePath = this.getTemplatePath();
        const componentName = `${args.fileName}.${fileExtension}`;
        const pathToTemplate = path.join(getHikeDirectory(), templatePath);
        const template = requireText(pathToTemplate, require);

        const result = Mustache.render(template, {
            extension: fileExtension,
            ...args,
        });

        console.log({
            extension: fileExtension,
            ...args,
        });

        mkdir(directoryPath)
            .then(() => writeToFile(path.join(directoryPath, componentName), result))
            .then(() => {
                console.log(chalk.green('Component generated!'));
                console.log(chalk.bold(`PATH: ${path.join(directoryPath, componentName)}`));
            })
            .catch((err: Error) => console.log(chalk.red(err.message)));
    }

    protected abstract getTemplatePath(): string;

    protected abstract getFileExtension(): string;

    protected abstract getOutputDirectory(): string;

}