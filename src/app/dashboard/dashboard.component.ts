import { Component } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities.slice(1, 4));
}
}