import { Pipe, PipeTransform } from '@angular/core';
import { crypto } from './crypto';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: crypto[]): crypto[] {
    
    return value.sort((a: { price: number; }, b: { price: number; }) => (a.price < b.price) ? 1 : -1);
  }

}
