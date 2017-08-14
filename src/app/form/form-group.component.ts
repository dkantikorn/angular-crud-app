// import { Component, OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form.component.css']
})

// export class FormGroupComponent implements OnInit {

//   usrNameChanges: string;
//   usrNameStatus: string;
//   userForm = new FormGroup({
//     name: new FormControl('Sarawutt.b', Validators.maxLength(10)),
//     age: new FormControl(20, Validators.required),
//     city: new FormControl(),
//     country: new FormControl()
//   });

//   constructor() { }

//   ngOnInit() {
//   }

//   get userName(): any {
//     return this.userForm.get('name');
//   }

//   onFormSubmit(): void {
//     console.log('Name:' + this.userForm.get('name').value);
//     console.log('Age:' + this.userForm.get('age').value);
//     console.log('City:' + this.userForm.get('city').value);
//     console.log('Country:' + this.userForm.get('country').value);
//   }

//   setDefaultValue() {
//     this.userForm.setValue({ name: 'Mahesh', age: 20, city: '', country: '' });
//   }
// }

export class FormGroupComponent implements AfterViewInit {
  usrNameChanges: string;
  usrNameStatus: string;
  formSubmitted = false;
  profiles = [
    { name: 'Developer', shortName: 'dev' },
    { name: 'Manager', shortName: 'man' },
    { name: 'Director', shortName: 'dir' }
  ];

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    age: new FormControl('', Validators.required),
    address: new FormGroup({
      houseNumber: new FormControl('', Validators.required),
      city: new FormControl('Bangkok'),
      country: new FormControl({ value: 'Thailand', disabled: true })
    }),
    gender: new FormControl('male'),
    profile: new FormControl(this.profiles[1].shortName),
    users: new FormArray([
      new FormControl('Sarawutt'),
      new FormControl('Bureekeaw'),
      new FormControl()
    ])
  });

  get userName(): any {
    return this.userForm.get('name');
  }

  ngAfterViewInit(): void {
    this.userForm.get('name').valueChanges.subscribe(data => this.usrNameChanges = data);
    this.userForm.get('name').statusChanges.subscribe(data => this.usrNameStatus = data);
  }

  onFormSubmit(): void {
    this.formSubmitted = true;
    if (this.userForm.valid) {
      this.logData();
      this.resetForm();
    } else {
      this.formSubmitted = false;
    }
  }

  resetForm() {
    this.userForm.reset();
  }

  setDefaultValue() {
    this.userForm.patchValue({
      name: 'Sarawutt', gender: 'male', profile: this.profiles[2].shortName,
      address: { city: 'Bangkok', country: 'Thailand' }
    });
  }

  setAge() {
    this.userForm.get('age').setValue('20');
  }

  setCountry() {
    this.userForm.get('address').get('country').setValue('Thailand');
  }

  get users(): FormArray {
    return this.userForm.get('users') as FormArray;
  }

  addUserField() {
    this.users.push(new FormControl());
  }

  deleteUserField(index: number) {
    this.users.removeAt(index);
  }

  logData() {
    console.log('Name:' + this.userForm.get('name').value);
    console.log('Age:' + this.userForm.get('age').value);
    console.log('Gender:' + this.userForm.get('gender').value);
    console.log('Profile:' + this.userForm.get('profile').value);

    //print address
    let addressFG = this.userForm.get('address');
    console.log('House Number: ' + addressFG.get('houseNumber').value);
    console.log('City:' + addressFG.get('city').value);
    console.log('Country:' + addressFG.get('country').value);

    //Iterate FormArray
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users.at(i).value);
    }
    // Gives complete address
    console.log(addressFG.value);
    //Checks address validation	 
    console.log(addressFG.valid);
    // Gives complete FormArray data	 
    console.log(this.users.value);
    //Checks FormArray validation	 	
    console.log(this.users.valid);
    // Gives Complete form data	 	 
    console.log(this.userForm.value);
    // checks Complete form validation	 	 
    console.log(this.userForm.valid);
  }

}
