import BaseGenerator from '../core/BaseGenerator';
import Mustache from 'mustache';
import * as fs from 'fs';

interface Args {
    componentName: string;
}

export default class ComponentGenerator extends BaseGenerator<Args> {
    generate(args: Args): void {
        const template = fs.readFileSync('./templates/component.mustache').toString();
        const result = Mustache.render(template, {componentName: args.componentName});
        fs.writeFile(args.componentName + ".tsx", result, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Component generated!");
        });

    }
}
