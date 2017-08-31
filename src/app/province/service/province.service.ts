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
   * Function get all province
   * @author  sarawutt.b
   */
  findAllProvince(): Observable<any> {
    return this.http.get('http://demo.cakephp-angular2.local/WebAPI/loadAllProvinces.json')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error !!'))
  }

  /**
   * 
   * Function find province by province id
   * @author  sarawutt.b
   */
  findProvinceById(id: any) {
    return this.http.get(`http://demo.cakephp-angular2.local/WebAPI/findProvinceById/${id}.json`)
      .map(respond => respond.json());
  }

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
      .map(response => response.json())
      .do(data => console.log('Province data' + JSON.stringify(province)))
      .catch(this.handleError);
  }

/**
* 
* Function update new province information
* @author  sarawutt.b
*/
  updateProvince(province: any) {
    console.log(JSON.stringify(province));
    return this.http.put('http://demo.cakephp-angular2.local/WebAPI/updateProvince.json', province)
      .map(response => response.json())
      .do(data => console.log('Province data' + JSON.stringify(province)))
      .catch(this.handleError);
  }

  /**
   * 
   * Function delete for the province
   * @param   id as integer id of the province
   * @author  sarawutt.b
   */
  deleteProvince(id: FormData) {
    return this.http.post('http://demo.cakephp-angular2.local/WebAPI/deleteProvince/' + id + '.json', JSON.stringify({ id: id }))
      .map((response: Response) => response.json())
      .catch(error => Observable.throw(error) || "server error");
  }



  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
