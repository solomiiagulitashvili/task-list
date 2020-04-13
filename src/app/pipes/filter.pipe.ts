import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../interfaces/task-interface';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: ITask[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.completed === true);
  }
}
