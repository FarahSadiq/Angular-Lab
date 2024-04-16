import { Component } from '@angular/core';
import { CITIES } from '../cities-list';
import { City } from '../city';
import { CityService } from '../city.service';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities : City[] = [];
  selectedCity?: City;
  constructor(private cityService:CityService){}
  
  ngOnInit(){
    this.getCities();
  }
  
onSelect(city: City): void {
  this.selectedCity = city;
}

getCities(): void {
  this.cityService.getCities().subscribe(cities => this.cities = cities);
}
}
