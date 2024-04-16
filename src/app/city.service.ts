import { Injectable } from '@angular/core';
import { CITIES } from './cities-list';
import { City } from './city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getCities(): Observable<City[]> {
    const cities = of(CITIES);
    return cities;
  }
  getCity(id: number): Observable<City> {
    // For now, assume that a hero with the specified `id` always exists.
    const city = CITIES.find(h => h.id === id)!;
    return of(city);
  }
}
