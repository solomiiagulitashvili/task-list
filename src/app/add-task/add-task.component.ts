import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITask } from '../interfaces/task-interface';
import { TaskService } from '../services/task.service';

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
  categories = [
    { name: 'sport', id: 1 },
    { name: 'career', id: 2 },
  ];
  task: ITask = {
    title: '',
    id: '',
    completed: false,
    date: '',
    steps: 0,
    level: 0,
    category: '',
  };
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.taskService.onAddTask(this.form.value);
  }
}
