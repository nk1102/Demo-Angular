import { Component , EventEmitter , Output} from '@angular/core';
import { Student } from '../Student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  name: string = '';
  registerNumber: string = '';
  age: number = 0;



  addStudent() {
    const student = new Student(this.name, this.registerNumber, this.age);
    this.studentAdded.emit(student);
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.registerNumber = '';
    this.age = 0;
  }

  @Output() studentAdded = new EventEmitter<Student>();
}
