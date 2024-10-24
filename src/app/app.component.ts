import { Component } from '@angular/core';
import { TaskManagerComponent } from './task-manager/task-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-task-manager></app-task-manager>',
  imports: [TaskManagerComponent],  // Ensure this is included
})
export class App {}