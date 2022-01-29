import { CoursesService } from './course/courses.service';
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
  courses;


  //dependancy injection
  constructor(service: CoursesService) {

    // let service = new CoursesService();  //coupled approach    
    this.courses = service.getCources();
  }


  // courses = ["courses1", "courses2", "courses3"];
  
  //logic for calling an HTTP service

  
  // getTitle() {
  //   return this.title;
  // }
}