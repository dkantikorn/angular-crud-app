import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  page: string = 'index';
  userList: any;
  userInfo: any;
  constructor(private _route: ActivatedRoute, private _userService: UserService, private router: Router) { }

  ngOnInit() {
    // this.findListAllUsers();
    this.main();
  }

  //Function making for detace wanted page
  main(page = 'index', params = null) {
    page = page.toString().toLowerCase();
    console.log(page);
    console.log(params);
    switch (page) {
      case 'index': this.findListAllUsers(); break;
      case 'view': this.findUserByUserId(params); break;
    }
  }

  //Function load all user are in the api application
  //Function for index page
  findListAllUsers() {
    this.page = 'index';
    this._userService.loadAllUsers().subscribe(response => {
      console.log(response);
      this.userList = response.users;
      console.log(response);
    });
  }

  //Function load a user infomation whare match parameter id
  //Function for view page
  findUserByUserId(params = null) {
    this.page = 'view';

    this._userService.findUserByUserId(params).subscribe(response => {
      this.userInfo = response;
      console.log(response);
    });

    this.router.navigate(['/user/view' , params]);
  }

  // Version making link with routerLink="" directive
  //Function load a user infomation whare match parameter id
  //Function for view page
  routerLinkFindUserByUserId() {
    // this.route.params
    //   .switchMap((params: Params) => this.bookService.getBook(+params['id']))
    //   .subscribe(book => this.book = book);

    this.page = 'view';
    this._route.params.subscribe(params => {
      const id = params['id'];
      this._userService.findUserByUserId(id).subscribe(response => {
        this.userInfo = response;
        console.log(response);
      });
    });
  }

}
