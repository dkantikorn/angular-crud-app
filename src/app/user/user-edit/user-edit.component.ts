
import { Component, OnInit } from '@angular/core';
// import { Component, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  formSubmitted = false;
  apiResponse: any;

  updateStatus: Boolean = false;
  user: any = { id: null, username: '', first_name: '', last_name: '', email: '', office_phone: '', mobile_phone: '' };

  UserForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    username: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    office_phone: new FormControl(),
    mobile_phone: new FormControl(),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['user-id'];
      console.log(id);
      if (!id) return;

      this.userService.findUserByUserId(id)
        .subscribe(
        user => {
          this.user = user.user.User || {}
          console.log(this.user);
        },
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

  onUpdateFormSubmit() {
    this.formSubmitted = true;

    // Method for REST API
    // console.log(this.UserForm.value);
    // this.userService.updateUser(this.UserForm.value).subscribe(user=>{
    //   console.log(user);
    // });
    this.userService.updateUserProfile(this.UserForm.value).subscribe(
      success => {
        this.updateStatus = true;
        this.apiResponse = success;
        this.router.navigate(['/user']);
      },
      error => {
        console.log(error);
      });
    //On submit update form

  }

  goBack() {
    this.location.back();
  }
}
