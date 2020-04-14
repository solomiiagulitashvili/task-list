import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { CategoriesService } from '../services/categories.service';
import { nanoid } from 'nanoid';
import { ICategory } from '../interfaces/category-interface';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

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
  categoryNames: [];

  constructor(
    private taskService: TaskService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.categoryNames = this.categoriesService.getCategories();
    console.log(this.categoryNames);
  }

  onSubmit() {
    let task = this.form.value;
    task.date = new Date().toLocaleString();
    task.id = nanoid();
    task.completed = false;
    task.progress = 0;
    this.taskService.onAddTask(task);
  }
}
