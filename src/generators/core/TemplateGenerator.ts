import chalk from "chalk";
import Mustache from "mustache";
import * as path from "path";
// @ts-ignore
import requireText from "require-text";
import { mkdir, writeToFile } from "../../util/file";
import { getHikeDirectory } from "../../util/paths";
import BaseGenerator from "./BaseGenerator";

export interface ITemplateGeneratorArgs {
    fileName: string;
}

export default abstract class TemplateGenerator<T extends ITemplateGeneratorArgs> extends BaseGenerator<
    ITemplateGeneratorArgs
> {
    public generate(args: T): void {
        const directoryPath = this.getOutputDirectory();
        const fileExtension = this.getFileExtension();
        const templatePath = this.getTemplatePath();
        const componentName = `${args.fileName}.${fileExtension}`;
        const pathToTemplate = path.join(getHikeDirectory(), templatePath);
        const template = requireText(pathToTemplate, require);

        const result = Mustache.render(template, Object.assign({}, args, { extension: fileExtension }));

        mkdir(directoryPath)
            .then(() => writeToFile(path.join(directoryPath, componentName), result))
            .then(() => {
                console.log(chalk.green("Component generated!"));
                console.log(chalk.bold(`PATH: ${path.join(directoryPath, componentName)}`));
            })
            .catch((err: Error) => console.log(chalk.red(err.message)));
    }

    protected abstract getTemplatePath(): string;

    protected abstract getFileExtension(): string;

    protected abstract getOutputDirectory(): string;
}
