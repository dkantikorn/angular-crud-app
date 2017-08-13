import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelId: any;  // เราป้อนค่า id = 5 ที่ตัวแปรนี้
  hotelDetail: any;

  allRoom: any;
  allEmployee: any;
  allCustomer: any;

  //Global variable single request
  obsGlobalVariable: any;
  allProjectList: any;

  constructor(private _hotelService: HotelService) {

    this.getAllProjWithGlobalVariable();
  }

  ngOnInit() {
  }

  /**
   * 
   * Function get all Hotel information by matching ID params
   */
  readHotelById() {
    this._hotelService.readHotelById(this.hotelId).subscribe(
      res => this.hotelDetail = res
    );
  }

  /**
   * 
   * Function read for all Hotail and relate information
   */
  getRoomsEmployeesAndCustomers() {
    this._hotelService.getRoomsEmployeesAndCustomers().subscribe(res => {

      this.allRoom = res[0];
      this.allEmployee = res[1];
      this.allCustomer = res[2];
    });
  }


  /**
 * 
 * Function make for example with angular 2 global variable
 */
  getAllProjWithGlobalVariable() {
    //Single request to the back-end in a component not work in another component
    //this.obsGlobalVariable = this._hotelService.getAllProjWithGlobalVariable();

    //Reused single request in each another component
    //Work with each other component
    this.obsGlobalVariable = this._hotelService.allProjectLists;
    this.obsGlobalVariable.subscribe(res => this.allProjectList = res);
  }
}
