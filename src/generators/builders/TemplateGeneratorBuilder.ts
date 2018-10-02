import TemplateGenerator, { TemplateGeneratorArgs } from '../core/TemplateGenerator';

export interface TemplateGeneratorBuilderArguments {
    fileExtension: string;
    outputDirectory: string;
    templatePath: string;
}

export default function buildTemplateGenerator<T extends TemplateGeneratorArgs>(args: TemplateGeneratorBuilderArguments) {
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
    };
}