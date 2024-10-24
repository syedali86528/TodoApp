import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-manager',
  standalone: true,
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  imports: [CommonModule, FormsModule] // Add this line
})
export class TaskManagerComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';

  ngOnInit() {
    this.loadTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        completed: false,
      };
      this.tasks.push(newTask);
      this.saveTasks();
      this.newTaskTitle = '';
    }
  }

  editTask(task: Task, newTitle: string) {
    task.title = newTitle;
    this.saveTasks();
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
    this.saveTasks();
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

}
