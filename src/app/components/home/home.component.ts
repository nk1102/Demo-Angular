import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  name: string = 'John Doe';
  mail: string = 'john@example.com';
  contact: string = '123-456-7890';
  editing: boolean = false;

  onEdit() {
    this.editing = true;
  };

  onSave() {
    this.editing = false;
  };



}
