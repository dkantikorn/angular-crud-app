import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProvinceService } from '../service/province.service';

@Component({
  selector: 'app-province-add',
  templateUrl: './province-add.component.html',
  styleUrls: ['./province-add.component.css']
})
export class ProvinceAddComponent implements OnInit {

  province: any = { code: null, name: null, name_eng: null, region_id: null };
  regions: any = [];

  constructor(
    private location: Location,
    private router: Router,
    private rout: ActivatedRoute,
    private provinceService: ProvinceService
  ) { }

  ngOnInit() {
    //Find options list for region
    this.provinceService.regionFindList().subscribe(
      success => this.regions = success.data || [],
      error => console.log(error),
      () => console.log('COMPLETE API')
    )
  }

  /**
   * 
   * Function add new province information
   * @author  sarawutt.b
   */
  addProvince() {
    console.log("Form data : " + JSON.stringify(this.province));
    this.provinceService.addProvince(this.province).subscribe(
      success => {
        this.router.navigate(['province']);
        console.log(success);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );
  }


  /**
   * 
   * Function history go back active when you press back button
   * @author  sarawutt.b
   */
  goBack() {
    this.location.back();
  }

}
