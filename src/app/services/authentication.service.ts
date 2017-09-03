import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  /**
   * 
   * Function Login make thing authentication
   * @author  sarawutt.b
   * @param username 
   * @param password 
   */
  login(username: string, password: string) {
    let formData = new FormData();
    formData.append('data[User][username]', username);
    formData.append('data[User][password]', password);
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/login.json', formData)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.data.tocken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return response = response.json();
      });
  }

  /**
   * 
   * Function logout take a current user in the session logged out
   * @author  satawutt.b
   */
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  /**
   * 
   * Function check user has already logged in
   * @author  sarawutt.b
   * @return  boolean
   */
  isLoggedIn(){
    if (localStorage.getItem("currentUser") === null){
      return false;
    }

    return true;
  } 

}
