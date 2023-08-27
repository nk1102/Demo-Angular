import { Component } from '@angular/core';
import { Student } from './Student.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  student: any[] = [  // Assuming each student is an object with properties name, registerNumber, and age
  { name: 'John Doe', registerNumber: '12345', age: 18 },
  { name: 'Jane Smith', registerNumber: '67890', age: 17 }
  
];


}
