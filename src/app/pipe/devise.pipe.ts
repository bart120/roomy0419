import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'devise' })
export class DevisePipe implements PipeTransform {
    transform(value: number, devise: string = '€', rate: number = 1) {
        return `${(value * rate).toFixed(2)} ${devise}`;
    }
}
