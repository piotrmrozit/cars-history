import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CarsService } from './cars/car.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { ProfileService } from './profile/profile.service';

import { AppRoutingModule } from './app-routing.module';
import { CarsModule } from './cars/cars.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './shared/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UsersComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    CarsModule,
    AppRoutingModule
  ],
  providers: [
    CarsService, 
    AuthService, 
    AuthGuardService,
    ProfileService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
