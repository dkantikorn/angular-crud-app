import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProvinceObservableService } from '../services/province-observable.service';
import { SerchProvincePipe } from '../serch-province.pipe';
import { ProvinceService } from './service/province.service';
@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  provinceList: any;
  searchTxt: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _provinceObservable: ProvinceObservableService,
    private provinceService: ProvinceService
  ) { }

  ngOnInit() {
    this.getProvinceObservable();
  }

  getProvinceObservable() {
    this._provinceObservable.getProvinceObservable().subscribe(
      (data) => {
        this.provinceList = data.provinces;
      },
      (error) => console.log(error),
      () => console.log('Synce success')
    )
  }

  /**
 * 
 * Function delete for the province
 * @param   id as integer id of the province
 * @author  sarawutt.b
 */
  deleteProvince(province) {
    if (confirm('Are you sure for delete the Province : ' + province.Province.name + ' ?')) {
      var index = this.provinceList.indexOf(province);
      this.provinceList.splice(index, 1);
      this.provinceService.deleteProvince(province.Province.id).subscribe(
        success => {
          if (success.message.type == 'ERROR') {
            alert('Could not be delete the province please try again!');
            this.provinceList.splice(index, 0, province);
          } else {
            let message: string = success.message.message || 'ลบข้อมูล ' + province.Province.name + ' เรียบร้อยแล้ว';
            alert(message);
          }
        },
        error => {
          alert('Could not be delete the province please try again!');
          this.provinceList.splice(index, 0, province);
          console.log(error)
        },
        () => console.log('COMPLETE API')
      );
    }
  }

}
