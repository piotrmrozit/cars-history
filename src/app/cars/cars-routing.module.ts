import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './../auth/auth-guard.service'
import { CarsComponent } from './cars.component';
import { CarsStartComponent } from './cars-start/cars-start.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

const carsRouting: Routes = [
  {
    path: 'cars', component: CarsComponent, canActivate: [AuthGuardService], children: [
      { path: '', component: CarsStartComponent },
      { path: 'new', component: CarEditComponent },
      { path: ':id', component: CarDetailComponent },
      { path: ':id/edit', component: CarEditComponent }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(carsRouting)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
