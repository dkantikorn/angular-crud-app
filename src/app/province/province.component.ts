import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProvinceObservableService } from '../services/province-observable.service';
import { SerchProvincePipe } from '../serch-province.pipe';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  provinceList: any;

  constructor(private _provinceObservable: ProvinceObservableService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getProvinceObservable();
  }

  getProvinceObservable() {
    this._provinceObservable.getProvinceObservable().subscribe(
      (data) => {
        this.provinceList = data.provinces;
        console.log(data.provinces);
      },
      (error) => console.log(error),
      () => console.log('Synce success')
    )
  }
}
