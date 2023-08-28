import { Component } from '@angular/core';
import { Student } from './Student.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  students: Student[] = [];

  onStudentAdded(student: Student) {
    this.students.push(student);
  }
}
