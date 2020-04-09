import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/category-interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  onAddCategory(category: ICategory) {
    localStorage.setItem('categories', JSON.stringify(category));
  }
}
