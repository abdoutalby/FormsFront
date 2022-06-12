import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enquettes'
})
export class EnquettesPipe implements PipeTransform {
 
    transform(
      value: any[],
      search: string
    ): any  {
      if (value) {
        const regexp = new RegExp(search, 'i');
        const properties = Object.keys(value[0]);
        return [
          ...value.filter((item) => {
            return properties.some((property) => regexp.test(item[property]));
          }),
        ];
      }
    }
  }

 
