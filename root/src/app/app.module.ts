import { CoursesService } from './course/courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],

  //got to defin provider to not see
  //NullInjectorError: No provider for CoursesService!
  providers: [
    CoursesService  //singlelton
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
