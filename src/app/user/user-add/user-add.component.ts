import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Location } from '@angular/common';

//Date picker Options set option to the datepicker
import { IMyDpOptions } from 'mydatepicker';

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

  //DDL From PHP find List
  roles: any;
  faculties: any;
  namePrefixes: any;


  //File attr
  files: FileList;
  fileName: string;


  //User model
  user: any = {
    faculty_id: null, role_id: null, ref_code: null,
    username: null, password: null, name_prefix_id: null, first_name: '', last_name: '', email: '', office_phone: '',
    mobile_phone: '', address: null, birth_date: null, moo: null, road: null, sub_district: null,
    district: null, province: null, zipcode: null, picture_path: null
  };

  //Reactive Form Control
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
    address: new FormControl(),
    birth_date: new FormControl(null, Validators.required),
    moo: new FormControl(),
    road: new FormControl(),
    sub_district: new FormControl(),
    district: new FormControl(),
    province: new FormControl(),
    zipcode: new FormControl(),
    office_phone: new FormControl(),
    mobile_phone: new FormControl(null, [Validators.required]),
    picture_path: new FormControl()
  });


  //DatePicker Options
  private myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'dd-mm-yyyy'
  };

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
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );




    //Load all list of the faculty
    this.userService.facultyFindList().subscribe(
      success => {
        this.faculties = success.data || {};
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );

    //Load for all name prefixes list
    this.userService.namePrefixFindList().subscribe(
      success => {
        this.namePrefixes = success.data || [{}];
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
  addUserProfile() {
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
    formData.append('data[User][address]', this.UserForm.get('address').value);
    formData.append('data[User][moo]', this.UserForm.get('moo').value);
    formData.append('data[User][road]', this.UserForm.get('road').value);
    formData.append('data[User][sub_district]', this.UserForm.get('sub_district').value);
    formData.append('data[User][district]', this.UserForm.get('district').value);
    formData.append('data[User][province]', this.UserForm.get('province').value);
    formData.append('data[User][zipcode]', this.UserForm.get('zipcode').value);
    formData.append('data[User][office_phone]', this.UserForm.get('office_phone').value);
    formData.append('data[User][mobile_phone]', this.UserForm.get('mobile_phone').value);

    this.userService.addUserProfile(formData).subscribe(
      success => {
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
   * @author  sarawutt.b
   */
  goBack() {
    this.location.back();
  }



  /**
   * 
   * Function when user choosing of the input file
   * @author  sarawutt.b
   * @return  void
   */
  onFileChange(event) {
    // console.log(event.target.files.length);
    if (event.target.files.length > 0) {
      // console.log(event);
      this.fileName = event.target.files[0].name;
    }
  }


  /*
  ------------------------------------------------------------------------------------------------------------------------
  TEST FUNCTION BELOW HERE
  ------------------------------------------------------------------------------------------------------------------------
  */


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
