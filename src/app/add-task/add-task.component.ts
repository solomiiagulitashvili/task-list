import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { CategoriesService } from '../services/categories.service';
import { nanoid } from 'nanoid';
import { Router } from '@angular/router';

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
    id: new FormControl(nanoid(), [Validators.required]),
  });
  categoryNames: [];

  constructor(
    private taskService: TaskService,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryNames = this.categoriesService.getCategories();
  }

  onSubmit() {
    let task = this.form.value;
    task.date = new Date().toLocaleString();
    task.completed = false;
    task.progress = 0;
    this.taskService.onAddTask(task);
    this.router.navigate(['tasks']);
  }
}
