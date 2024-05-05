import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    NgIf
  ],
  providers: [ importProvidersFrom(HttpClientModule),],
  bootstrap: [AppComponent]
})
export class AppModule { }
