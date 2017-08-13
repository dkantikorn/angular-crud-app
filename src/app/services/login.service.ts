import { Injectable } from '@angular/core';// ทำให้ service นี้ถูก inject ได้โดย component อื่น
import { Http } from '@angular/http';// ใช้เรียก http ไปยัง server ภายนอก
import { Router, ActivatedRoute } from '@angular/router';// ใช้เพื่อ redirect หน้าเพจ

//import { Subject } from 'rxjs/Subject';  // import ตัวแปร ประเภท subject ของ rxjs เข้ามาใช้
import { BehaviorSubject } from 'rxjs/BehaviorSubject';//import ตัวแปร ประเภท BehaviorSubject

@Injectable()
export class LoginService {

  //Not Work for RxJS normal subject
  //public loginStatus = new Subject<String>(); // ให้ loginStatus มีประเภทตัวแปรเป็น subject ของ string

  // constructor(private router: Router, private _http: Http) {
  //   this.loginStatus.next(''); // ค่าเริ่มต้นเมื่อเริ่ม service ให้ subject เป็นค่าว่าง
  // }

  // login(body: Object): any {
  //   return this._http.post('http://127.0.0.1/api/login', body)
  //     .map(res => { return res.json() })
  //     .subscribe(res => { // กรณี login สำเร็จ
  //       this.loginStatus.next('true'); // ให้ subject push ค่าใหม่ออกมา
  //       this.router.navigate(['target-page']);  // redirect ไปหน้าที่ต้องการหลัง login
  //     });
  // }


  //public loginStatus = new BehaviorSubject<String>('');  // ให้ loginStatus มีประเภทตัวแปรเป็น subject และให้มีค่าเริ่มต้นเป็น ค่าว่าง
  public loginStatus = new BehaviorSubject<String>('true');  // ให้ loginStatus มีประเภทตัวแปรเป็น subject และให้มีค่าเริ่มต้นเป็น ค่าว่าง

  constructor(private router: Router, private _http: Http) { }

  /**
   * 
   * Login service function call to back-end login
   * @param body as a object of json auth request information
   */
  login(body: Object): any {
    return this._http.post('http://127.0.0.1/api/login', body)
      .map(res => { return res.json() })
      .subscribe(res => { // กรณี login สำเร็จ
        this.loginStatus.next('true'); // ให้ subject push ค่า 'true' ออกมา เมื่อ login สำเร็จ
        localStorage.setItem("loginStatus", "true");
        this.router.navigate(['target-page']);  // redirect ไปหน้าที่ต้องการหลัง login
      });
  }

  /**
   * 
   * Logout service call to logout
   * whent success logedout then redirect to the home page
   */
  logout(){
    this.loginStatus.next('');
    localStorage.clear();
    this.router.navigate(['/'])
  }
}
