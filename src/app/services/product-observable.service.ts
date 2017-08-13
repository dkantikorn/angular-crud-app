import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductObservableService {

  constructor(private _http: Http) { }

  getProductObservable(): Observable<any> {
    return this._http.get('http://oacbgt-uat.local/Users/index.json')
    .map((response: Response) => response.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error !!'))
  }

}
