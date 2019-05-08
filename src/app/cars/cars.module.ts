import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarsRoutingModule } from './cars-routing.module';

import { CarsComponent } from './cars.component';
import { CarsStartComponent } from './cars-start/cars-start.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarItemComponent } from './car-list/car-item/car-item.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarsStartComponent,
    CarListComponent,
    CarEditComponent,
    CarDetailComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
