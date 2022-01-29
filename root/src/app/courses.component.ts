
import { Component } from '@angular/core';

@Component({
  // selector: 'courses',
  // template: '<h2>{{ "Title: " + title }}</h2>'
  // template: '<h2>{{ getTitle() }}</h2>' //call getter

  selector: 'courses',
  //directive
  template: `
    <h2>{{ "Title: " + title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses = ["courses1", "courses2", "courses3"];
  // getTitle() {
  //   return this.title;
  // }
}