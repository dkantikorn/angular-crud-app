import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProvinceService } from '../service/province.service';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-province-detail',
  templateUrl: './province-detail.component.html',
  styleUrls: ['./province-detail.component.css']
})
export class ProvinceDetailComponent implements OnInit {

  province: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private provinceService: ProvinceService
  ) { }

  ngOnInit() {
    //Find province detail by province-id
    this.findProvinceById();
  }

  /**
   * 
   * Function find province by province id
   * @author  sarawutt.b
   */
  findProvinceById() {
    this.route.params
      .switchMap((params: Params) => this.provinceService.findProvinceById(+params['province-id']))
      .subscribe(info => this.province = info);
  }

  /**
   * 
   * Function go back when click the back button
   * @author sarawutt.b
   */
  goBack() {
    this.location.back();
  }
}
