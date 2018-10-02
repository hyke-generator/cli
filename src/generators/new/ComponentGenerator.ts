import TemplateGenerator from '../core/TemplateGenerator';

interface Args {
    fileName: string;
}

export default class ComponentGenerator extends TemplateGenerator<Args> {

    protected getOutputDirectory(): string {
        return './src/components';
    }

    protected getFileExtension(): string {
        return 'tsx';
    }

    protected getTemplatePath(): string {

        return 'templates/component.mustache';
    }
}