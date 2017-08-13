import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus: any; //กำหนดตัวแปรขึ้นมารับค่า login ของ service

  constructor(private loginService: LoginService) {
    //ให้ loginStatus ของ component ไปรับค่ามาจาก loginStatus ของ service
    this.loginStatus = loginService.loginStatus;
  }

  /**
   * 
   * Login service function call to back-end login
   * @param user as a string of the username
   * @param pass as a string of user password
   */
  login(user, pass) {
    let body: Object = { "username": user, "password": pass }
    this.loginService.login(body);  // ส่งค่าไปทำการ login ที่ service
  }

  /**
   * 
   * Logout service call to logout
   * whent success logedout then redirect to the home page
   */
  logout() {
    this.loginService.logout();
  }

  ngOnInit() {

  }

}
