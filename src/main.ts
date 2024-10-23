import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GreetingComponent } from './app/greeting/greeting.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-greeting></app-greeting>',
  imports : [GreetingComponent]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
