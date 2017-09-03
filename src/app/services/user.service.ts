import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

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
 * Function find list for name prefixes
 * @author  sarawutt.b
 */
  namePrefixFindList() {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/namePrefixFindList.json')
      .map(respond => respond.json());
  }


  /**
   * 
   * Function update for user profile
   * @author sarawutt.b
   * @param user as a object of user information
   */
  addUserProfile(user: any) {
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/addUserProfile.json', user)
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error) || "server error");
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

  /**
   * 
   * Function delete for the user profile
   * @param   id as integer id of the user
   * @author  sarawutt.b
   */
  deleteUserProfile(id: any) {
    // return this.http.get('http://demo.cakephp-angular2.local/WebAPI/deleteUserProfile/' + id + '.json')
    //   .map((response: Response) => console.log(response.json()))
    //   .catch(error => Observable.throw(error) || "server error");
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/deleteUserProfile/' + id + '.json', JSON.stringify({ id: id }))
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error) || "server error");
  }



  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
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

  /**
   * 
   * Function upload file
   * @param event 
   */
  uploadProfile(formData?: any) {
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/uploadProfile.json', formData)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
      data => console.log('success'),
      error => console.log(error)
      )
  }

  /**
 * 
 * Function upload file
 * @param event 
 */
  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      //let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      //headers.append('Content-Type', 'multipart/form-data');
      //headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      this.http.post('http://demo.cakephp-angular2.local/WebAPI/uploadProfile.json', formData)
        .map(res => res.json())
        .catch(error => Observable.throw(error))
        .subscribe(
        data => console.log('success'),
        error => console.log(error)
        )
    }
  }

  // login(body: Object): any {
  //   return this._http.post(this.apiEndpoint + 'users/login', body)
  //     .map(res => { return res.json() })
  //     .subscribe(response => { this.isLogin = true; });
  // }
}
