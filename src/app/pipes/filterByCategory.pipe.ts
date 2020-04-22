import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../interfaces/task-interface';

@Pipe({
  name: 'filterByCategory',
  pure: false,
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: ITask[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.selectedCategory.id == filter);
  }
}
