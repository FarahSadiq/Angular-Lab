import {Component, Input} from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css'
})
export class CityDetailComponent {
  @Input() city?: City;
}
