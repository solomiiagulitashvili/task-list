import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { nanoid } from 'nanoid';
import { ICategory } from '../interfaces/category-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });
  categories$: Observable<ICategory[]> = this.categoriesService.categories$;
  @Input() category: ICategory;

  constructor(private categoriesService: CategoriesService) {}

  onSubmit() {
    let category = this.form.value;
    category.id = nanoid();
    this.categoriesService.onAddCategory(category);
  }
  onDeleteCategory(id) {
    this.categoriesService.onDeleteCategory(id);
  }
}
