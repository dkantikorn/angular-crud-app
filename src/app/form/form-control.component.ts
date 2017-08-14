import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form.component.css']
})
export class FormControlComponent implements OnInit {

  name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
  age = new FormControl(20, Validators.required);
  city = new FormControl();
  country = new FormControl({ value: 'Thailand', disabled: true });
  married = new FormControl(true);

  constructor() { }

  ngOnInit() {
  }

  setNameValue() {
    this.name.setValue('Sarawutt.b');
    console.log('Name: ' + this.name.value);
    console.log('Validation Status: ' + this.name.status);
  }

  setCityValue() {
    this.city.setValue('Varanasi');
  }

  setResetName() {
    this.name.reset();
  }

  changeValue() {
    console.log(this.married.value);
    this.married = new FormControl(!this.married.value);
  }
}
