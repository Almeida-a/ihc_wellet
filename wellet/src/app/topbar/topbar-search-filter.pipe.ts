import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topbarSearchFilter'
})
export class TopbarSearchFilterPipe implements PipeTransform {

    transform(items: any[], searchText: string): any[] {
  
      if (!items) {
        return [];
      }
      if (!searchText) {
        return [];
      }
      searchText = searchText.toLocaleLowerCase();
  
      return items.filter(it => {
        return it.routeName.toLocaleLowerCase().includes(searchText);
      });
    }
  }
