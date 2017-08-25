import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  objectKeys = Object.keys;

  formSubmitted: boolean = false;
  apiResponse: any;
  updateStatus: boolean = false;
  roles: any;
  faculties:any;

  //User model
  user: any = {
    faculty_id: null, role_id: null, ref_code: null,
    username: null, password: null, name_prefix_id: null, first_name: '', last_name: '', email: '', office_phone: '',
    mobile_phone: '', picture_path: null
  };

  UserForm = new FormGroup({
    faculty_id: new FormControl(null, Validators.required),
    role_id: new FormControl(null, Validators.required),
    ref_code: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    name_prefix_id: new FormControl(null, Validators.required),
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    office_phone: new FormControl(),
    mobile_phone: new FormControl(),
    picture_path: new FormControl(null, Validators.required)

  });



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit() {
    //Load all list role
    this.userService.roleFindList().subscribe(
      success => {
        this.roles = success.data;
        console.log(this.roles);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );


    //Load all list of the faculty
    this.userService.facultyFindList().subscribe(
      success =>{
        this.faculties = success.data || {};
        console.log(this.faculties);
      },
      error=>console.log(error),
      ()=>console.log('COMPLETE API')
    );
  }

  /**
   * 
   * Function add for new user to the system
   * @author  sarawutt.b
   */
  addNewUser() {

  }

  generateArray(obj: any) {
    return Object.keys(obj).map((key) => { return { key: key, value: obj[key] } });
  }
  /**
   * 
   * Function go bake when you click back
   */
  goBack() {
    this.location.back();
  }
}
