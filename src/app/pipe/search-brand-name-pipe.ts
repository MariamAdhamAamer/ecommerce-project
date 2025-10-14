import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBrandName'
})
export class SearchBrandNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
