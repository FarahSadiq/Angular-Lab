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
  data: any;
  errorMessage: any;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.fetchData();
  }

  getHeroes(): void {
    this.cityService.getCities().subscribe(
      cities => this.cities = cities.slice(1, 4));
}
fetchData(): void {
  this.cityService.fetchData().subscribe(
      {next: data => Response,
      error: error => console.error("error encountered!!!!!!!!")
      }
      
  );
}
}