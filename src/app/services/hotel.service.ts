import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {

  allProjectLists : any;
  constructor(private _http: Http) { }

  /**
   * 
   * Function get all Hotel information by matching ID params
   */
  readHotelById(id): Observable<any> {
    return this._http
      .get('http://localhost/api/hostel/' + id)
      .map(response => { return response.json(); });
  }

  /**
   * 
   * Function delete room of the Hotel and all booking is relate
   * @param rid as integer of room id
   */
  deleteRoom(rid): Observable<any> {

    // ลบ booking ทุกรายการที่มี room id = rid
    const a = this._http.delete('http://localhost/api/booking?filter[where][room]=' + rid)

      .map(res => { return res.json() });

    // ลบ room ที่มี id = rid
    const b = this._http.delete('http://localhost/api/room/' + rid)

      .map(res => { return res.json() });

    /**
     * 
     * Do syncronize
     */
    return Observable.concat(a, b)
  }

  /**
  * 
  * Function read for all Hotail and relate information
  * @returns array of room , employee , and customer detail information
  */
  getRoomsEmployeesAndCustomers(): Observable<any> {

    // ดึงข้อมูล room ทั้งหมด
    const a = this._http.get('http://localhost/api/room');

    // ดึงข้อมูล employee ทั้งหมด
    const b = this._http.get('http://localhost/api/employee/');

    // ดึงข้อมูล customerdetail ทั้งหมด
    const c = this._http.get('http://localhost/api/customerdetail/');

    /**
     * 
     * Do palarell
     */
    return Observable.forkJoin(a, b, c)
  }

  /**
   * 
   * Function make for example with angular 2 global variable
   * used for .publishReplay().refCount()
   */
  getAllProjWithGlobalVariable() {
    // Single request to the back-end in a component not work in another component
    // return this._http.get('http://yourapi.com/projects')
    //   .map(res => res.json()).publishReplay().refCount();

    // Reused single request in each another component
    // Work with each other component
    this.allProjectLists =  this._http.get('http://yourapi.com/projects')
      .map(res => res.json()).publishReplay().refCount();
  }
}
