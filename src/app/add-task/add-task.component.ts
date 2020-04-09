import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { CategoriesService } from '../services/categories.service';
import { nanoid } from 'nanoid';
import { ICategory } from '../interfaces/category-interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    selectedCategory: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required]),
    steps: new FormControl('', [Validators.required]),
  });
  categories: ICategory[] = [
    { name: 'career', id: 'jkjl' },
    { name: 'sport', id: 'khlk' },
  ];

  constructor(
    private taskService: TaskService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let task = this.form.value;
    task.date = new Date().toLocaleString();
    task.id = nanoid();
    task.completed = false;
    task.progress = 0;
    this.taskService.onAddTask(task);
    // let category: ICategory;
    // category.name = this.form.value.selectedCategory;
    // category.id = nanoid();
    // this.categoriesService.onAddCategory(category);
  }
}
