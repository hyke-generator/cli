import BaseGenerator from '../core/BaseGenerator';

interface Args {
    appName: string;
}

export default class NewApplicationGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        console.log(`Generating ${args.appName}`);
    }
}