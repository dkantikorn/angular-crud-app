import { Component, OnInit, ElementRef } from '@angular/core';
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
  faculties: any;
  namePrefixes: any;
  files: FileList;

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
    mobile_phone: new FormControl(null, [Validators.required]),
    picture_path: new FormControl()
  });



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private elm: ElementRef,
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
      success => {
        this.faculties = success.data || {};
        console.log(this.faculties);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );

    //Load for all name prefixes list
    this.userService.namePrefixFindList().subscribe(
      success => {
        this.namePrefixes = success.data || [{}];
        console.log(this.namePrefixes);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    )
  }


  /**
   * 
   * Function add for new user to the system function do when form valid and you press submit the button
   * @author  sarawutt.b
   */
  onAddNewUserFormSubmit() {
    let files = this.elm.nativeElement.querySelector('#UserPictureProfile').files;
    let formData = new FormData();
    let file = files[0];

    formData.append('data[User][picture_path]', file, file.name);
    formData.append('data[User][faculty_id]', this.UserForm.get('faculty_id').value);
    formData.append('data[User][role_id]', this.UserForm.get('role_id').value);
    formData.append('data[User][ref_code]', this.UserForm.get('ref_code').value);
    formData.append('data[User][username]', this.UserForm.get('username').value);
    formData.append('data[User][password]', this.UserForm.get('password').value);
    formData.append('data[User][name_prefix_id]', this.UserForm.get('name_prefix_id').value);
    formData.append('data[User][first_name]', this.UserForm.get('first_name').value);
    formData.append('data[User][last_name]', this.UserForm.get('last_name').value);
    formData.append('data[User][email]', this.UserForm.get('email').value);
    formData.append('data[User][office_phone]', this.UserForm.get('office_phone').value);
    formData.append('data[User][mobile_phone]', this.UserForm.get('mobile_phone').value);

    this.userService.addUserProfile(formData).subscribe(
      success => {
        console.log(success);
        this.router.navigate(['/user']);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );

  }

  fileChange(event) {
    return this.userService.fileChange(event);
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


  /**
   * 
   * Test for upload file
   * @author sarawutt.b
   */

  onUploadFile() {
    let files = this.elm.nativeElement.querySelector('#fileInput').files;
    console.log(files);
    let formData = new FormData();
    let file = files[0];
    formData.append('data[User][picture_path]', file, file.name);
    formData.append('data[User][xxx]', 'Foo');
    formData.append('data[User][yyy]', 'BAR');
    this.userService.uploadProfile(formData);
  }


  /**
   * 
   * Test for upload file
   * @author sarawutt.b
   */
  onChange(files?: FileList) {
    console.log(files);
  }

}
