import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category-interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  private categoriesSubject = new BehaviorSubject<ICategory[]>(
    this.getCategories()
  );
  categories$: Observable<ICategory[]> = this.categoriesSubject.asObservable();
  localCategories: ICategory[];

  ngOnInit() {
    this.categories$.subscribe();
  }

  onAddCategory(category: ICategory) {
    this.localCategories = this.getCategories();
    // console.log(this.localTasks);
    this.localCategories.push(category);
    // console.log(this.localTasks);
    localStorage.setItem('categories', JSON.stringify(this.localCategories));
    this.categoriesSubject.next(this.localCategories);
  }

  getCategories() {
    let existantCategories = JSON.parse(localStorage.getItem('categories'));
    if (existantCategories) {
      return existantCategories;
    } else return [];
  }

  onDeleteCategory(id) {
    this.localCategories = this.getCategories();
    console.log(this.localCategories);
    console.log(id);
    let deleted = this.localCategories.filter((task) => {
      return task.id !== id;
    });
    console.log(deleted);
    localStorage.setItem('categories', JSON.stringify(deleted));
    this.categoriesSubject.next(deleted);
  }

  getCategoryNames() {
    let categories = this.getCategories();
    categories.map((category) => {
      return category.name;
    });
  }
}
