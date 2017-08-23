import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProvinceObservableService {

  constructor(private _http: Http) { }

  // getProvinceObservable(): Observable<any> {
  //   return this._http.get('http://spc.project.zicure.local/DemoAngularWebAPI/getProvinceObservable.json')
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server Error !!'))
  // }

  getProvinceObservable(): Observable<any> {
    return this._http.get('http://demo.cakephp-angular2.local/WebAPI/loadAllProvinces.json')
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error !!'))
  }
}
