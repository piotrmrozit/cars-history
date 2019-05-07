import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarDetailComponent } from './cars/car-detail/car-detail.component';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarItemComponent } from './cars/car-list/car-item/car-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarsStartComponent } from './cars/cars-start/cars-start.component';
import { CarEditComponent } from './cars/car-edit/car-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { CarsService } from './cars/car.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailComponent,
    CarListComponent,
    CarItemComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    AboutComponent,
    UsersComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CarsStartComponent,
    CarEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CarsService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
