import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studentDetails: string = '';

  addNewStudent(name: string, reg: string, age: string) {
    this.studentDetails = `${name}-${reg}-${age}`;
    
  }

}
