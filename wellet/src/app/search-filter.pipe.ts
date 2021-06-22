// import { formatDate } from '@angular/common';
import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
// import { DatePipe } from '@angular/common';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // datepipe: DatePipe;

  // constructor() {
  //   this.datepipe = new DatePipe(LOCALE_ID.toString());
  // }
  constructor() {}

  transform(items: any[], option: string, searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    if (option) {
      if ("name".includes(option.toLocaleLowerCase())) {
        return items.filter(it => {
          return it.name.toLocaleLowerCase().includes(searchText);
        });
      }
      if ("date".includes(option.toLocaleLowerCase())) {
        return items.filter(it => {
          // if (this.datepipe.transform(it.date, 'yyyy-MM-dd'))
          //   return this.datepipe.transform(it.date, 'yyyy-MM-dd')?.includes(searchText);
          // return true;
          // return formatDate(it.date, 'yyyy-MM-dd', this.locale).includes(searchText);
          return it.date.toLocaleDateString().toString().includes(searchText);
        });
      }
      if ("category".includes(option.toLocaleLowerCase())) {
        return items.filter(it => {
          return it.category.toLocaleLowerCase().includes(searchText);
        });
      }
    }
    // Else
    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText) || it.category.toLocaleLowerCase().includes(searchText) || it.date.toLocaleDateString().toString().includes(searchText);
    });
  }
}