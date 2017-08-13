import { Component, OnInit } from '@angular/core';
import { Planets } from '../shared/planets.model';
import { PlanetsService } from '../shared/planets.service';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planetsDetail: Planets[] = [];
  selectedPlanet: Planets;
  constructor(private _planetService: PlanetsService) { }

  ngOnInit() {
    this._planetService.getPlanets().then(planets => this.planetsDetail = planets);
    this.selectedPlanet = new Planets();
  }

  showPlanetInfo(selplanet) {
    this.selectedPlanet = selplanet;
  }
}
