import TemplateGenerator, { ITemplateGeneratorArgs } from "../core/TemplateGenerator";

export interface ITemplateGeneratorBuilderArguments {
    fileExtension: string;
    outputDirectory: string;
    templatePath: string;
}

export default function buildTemplateGenerator<T extends ITemplateGeneratorArgs>(
    args: ITemplateGeneratorBuilderArguments,
) {
    return new class Generator extends TemplateGenerator<T> {
        protected getFileExtension(): string {
            return args.fileExtension;
        }

        protected getOutputDirectory(): string {
            return args.outputDirectory;
        }

        protected getTemplatePath(): string {
            return args.templatePath;
        }
    }();
}
