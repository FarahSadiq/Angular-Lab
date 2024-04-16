import {Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CityService } from '../city.service';
import { City } from '../city';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css'
})
export class CityDetailComponent {
  @Input() city?: City;
  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCity();
  }
  
  getCity(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cityService.getCity(id)
      .subscribe(city => this.city = city);
  }
}
