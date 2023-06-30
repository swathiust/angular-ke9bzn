import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component {
  // username = '';
  //email = '';
  // password = '';
  //@ViewChild('f', { static: false }) slForm: NgForm | undefined;
  form = {
    username: '',
    email: '',
    password: '',
  };

  success = '';

  onSubmit(form: NgForm) {
    console.log(form);
    this.success = 'successfully submitted form';
  }
}
