//import { Component, OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements AfterViewInit {

  usrNameChanges: string;
  usrNameStatus: string;
  formSubmitted = false;

  UserForm = new FormGroup({
    username: new FormControl('dkantikorn', [Validators.required, Validators.maxLength(10)]),
    first_name: new FormControl('Sarawutt', Validators.required),
    last_name: new FormControl('Bureekeaw', Validators.required),
  });

  constructor() { }

  ngAfterViewInit(): void {
    // this.userForm.get('name').valueChanges.subscribe(data => this.usrNameChanges = data);
    // this.userForm.get('name').statusChanges.subscribe(data => this.usrNameStatus = data);
  }

  onUpdateFormSubmit() {
    this.formSubmitted = true;
    //On submit update form

  }
}
