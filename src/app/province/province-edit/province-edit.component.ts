import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProvinceService } from '../service/province.service';

@Component({
  selector: 'app-province-edit',
  templateUrl: './province-edit.component.html',
  styleUrls: ['./province-edit.component.css']
})
export class ProvinceEditComponent implements OnInit {
  province: any = { id: null, code: null, name: null, name_eng: null, region_id: null };
  regions: any = [];
  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private provinceService: ProvinceService
  ) { }

  ngOnInit() {
    //Find options list for region
    this.provinceService.regionFindList().subscribe(
      success => this.regions = success.data || [],
      error => console.log(error),
      () => console.log('COMPLETE API')
    );


    var id = this.route.params.subscribe(params => {
      var id = params['province-id'];
      if (!id) return;
      this.provinceService.findProvinceById(id)
        .subscribe(
        province => {
          this.province = province.data.Province || {}
          console.log(this.province);
        },
        response => {
          if (response.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }


  /**
  * 
  * Function update new province information
  * @author  sarawutt.b
  */
  updateProvince() {
    console.log("Form data : " + JSON.stringify(this.province));
    this.provinceService.updateProvince(this.province).subscribe(
      success => {
        console.log(success);
        let message: string = success.message.message || 'บันทึกเปลี่ยนแปลงข้อมูลเรียบร้อยแล้ว';
        alert(message);
        this.router.navigate(['province']);
      },
      error => console.log(error),
      () => console.log('COMPLETE API')
    );
  }

}
