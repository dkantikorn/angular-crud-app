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
export class ProvinceService {

  url: string = 'http://demo.cakephp-angular2.local/WebAPI';
  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  /**
   * 
   * Function find list region
   * @author  sarawutt.b
   */
  regionFindList() {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/regionFindList.json')
      .map(respond => respond.json());
  }

  /**
 * 
 * Function add new province information
 * @author  sarawutt.b
 */
  addProvince(province: any) {
    console.log(JSON.stringify(province));
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/addProvince.json', province)
      .map(response => response.json)
      .do(data => console.log('Province data' + JSON.stringify(province)))
      .catch(this.handleError);
  }


  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
