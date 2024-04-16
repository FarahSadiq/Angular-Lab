import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CityDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
