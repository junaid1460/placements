import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'keyval' })
export class KeyValPipe implements PipeTransform {
    transform(value, args: string[]) {
        const tmp = [];
        for (const i in value) {
            if (true) {
                tmp.push({key : i, value: value[i]});
            }
        }
        return tmp;
    }
}
