import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about',  component: AboutComponent},
  { path: 'users', component: UsersComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'cars', component: CarsComponent, children: [
    { path: '', component: CarsStartComponent},
    { path: 'new', component: CarEditComponent},
    { path: ':id', component: CarDetailComponent},
    { path: ':id/edit', component: CarEditComponent}
  ]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
