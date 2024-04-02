import { Component } from '@angular/core';
import { CITIES } from '../cities-list';
import { City } from '../city';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.css',
})
export class CitiesComponent {
  cities = CITIES;
  selectedCity?: City;
onSelect(city: City): void {
  this.selectedCity = city;
}
}
