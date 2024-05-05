import { Injectable } from '@angular/core';
import { CITIES } from './cities-list';
import { City } from './city';
import { Observable, catchError, of, throwError } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = 'https://api.example.com/data';


  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    const cities = of(CITIES);
    return cities;
  }
  getCity(id: number): Observable<City> {
    // For now, assume that a hero with the specified `id` always exists.
    const city = CITIES.find(h => h.id === id)!;
    return of(city);
  }
  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
