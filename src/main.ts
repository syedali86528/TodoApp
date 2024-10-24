import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';  // Ensure this path is correct
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(App, {
  providers: [FormsModule, CommonModule],
});
