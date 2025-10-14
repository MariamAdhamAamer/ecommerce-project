import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPriceName'
})
export class SearchPriceNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
