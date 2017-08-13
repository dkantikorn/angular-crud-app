import { Injectable } from '@angular/core';// ทำให้ service นี้ถูก inject ได้โดย component อื่น
import { Http } from '@angular/http';// ใช้เรียก http ไปยัง server ภายนอก
import { Router, ActivatedRoute } from '@angular/router';// ใช้เพื่อ redirect หน้าเพจ
import { Subject } from 'rxjs/Subject';  // import ตัวแปร ประเภท subject ของ rxjs เข้ามาใช้
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  isLogin: Boolean = false;
  constructor(private _http: Http, private _rout: ActivatedRoute) { }

  //Function load all user are in the api application
  loadAllUsers() {
    return this._http.get('http://spc.project.zicure.local/DemoAngularWebAPI/loadAllUsers.json')
      .map(respond => respond.json());
  }

  //Function load a user infomation whare match parameter id
  findUserByUserId(id) {
    return this._http.get(`http://spc.project.zicure.local/DemoAngularWebAPI/findUserByUserId/${id}.json`)
      .map(respond => respond.json());
  }


  // login(body: Object): any {
  //   return this._http.post(this.apiEndpoint + 'users/login', body)
  //     .map(res => { return res.json() })
  //     .subscribe(response => { this.isLogin = true; });
  // }
}
