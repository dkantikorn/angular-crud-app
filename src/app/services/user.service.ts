import { Injectable } from '@angular/core';// ทำให้ service นี้ถูก inject ได้โดย component อื่น
import { Http, Response } from '@angular/http';// ใช้เรียก http ไปยัง server ภายนอก
import { Router, ActivatedRoute } from '@angular/router';// ใช้เพื่อ redirect หน้าเพจ
import { Subject } from 'rxjs/Subject';  // import ตัวแปร ประเภท subject ของ rxjs เข้ามาใช้
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  isLogin: Boolean = false;
  url: string = 'http://demo.cakephp-angular2.local/WebAPI';
  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  //Function load all user are in the api application
  loadAllUsers() {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/loadAllUsers.json')
      .map(respond => respond.json());
  }

  //Function load a user infomation whare match parameter id
  findUserByUserId(id) {
    return this.http.get(`http://demo.cakephp-angular2.local/WebAPI/findUserByUserId/${id}.json`)
      .map(respond => respond.json());
  }

  /**
   * 
   * Function find list for role
   * @author  sarawutt.b
   */
  roleFindList() {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/roleFindList.json')
      .map(respond => respond.json());
  }

  /**
   * 
   * Function find list for faculty
   * @author  sarawutt.b
   */
  facultyFindList() {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/facultyFindList.json')
      .map(respond => respond.json());
  }


  /**
   * 
   * Function update for user profile
   * @author sarawutt.b
   * @param user as a object of user information
   */
  updateUserProfile(user: any) {
    return this.http.put(this.url + '/updateUserProfile/' + user.id + '.json', JSON.stringify(user))
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error) || "server error");
  }



  //==========================================================================================================
  //Angular with REST API
  //==========================================================================================================
  getUsers() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getUser(id) {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user) {
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  /**
   * 
   * Function update for the user
   * @param user 
   */
  updateUser(user) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error) || "server error");
  }

  deleteUser(id) {
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id) {
    return this.url + "/" + id + '.json';
  }

  // login(body: Object): any {
  //   return this._http.post(this.apiEndpoint + 'users/login', body)
  //     .map(res => { return res.json() })
  //     .subscribe(response => { this.isLogin = true; });
  // }
}
