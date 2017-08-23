import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Promise<Country[]>
  constructor(private countryService: CountryService) { }
  ngOnInit() {
    this.countries = this.countryService.getCountries();
  }

}
