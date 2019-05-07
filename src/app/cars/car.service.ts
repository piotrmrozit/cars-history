import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http'
import { AuthService } from '../auth/auth.service';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  carsChanged = new Subject<Car[]>();

  private cars: Car[] = [
    new Car('Honda', 'CRX', 125, 'https://img.favcars.com/honda/crx/images_honda_crx_1992_1_800x600.jpg'),
    new Car('Honda', 'Prelude', 130, 'http://www.v10.pl/archiwum/tuning/honda/prelude_wiejski_tuning/honda_prelude_iv_gen_2.jpg'),
    new Car('Nissan', '350z', 300, 'https://i.pinimg.com/originals/b1/59/9c/b1599cdf6cd63b7dc10f12140af75b46.jpg')
  ]

  constructor(private http: HttpClient, private authService: AuthService) {}

  getCars() {
    return this.cars.slice();
  }

  getCar(index: number) {
    return this.cars[index];
  }

  addCar(car: Car) {
    this.cars.push(car);
    this.carsChanged.next(this.cars.slice());
  }

  setCars(cars: Car[]) {
    this.cars = cars;
    this.carsChanged.next(this.cars.slice()); 
  }

  storeCars() {
    const token = this.authService.getToken();
    return this.http.put('https://cars-history-db-cc3ab.firebaseio.com/cars.json?auth=' + token, this.getCars());
  }

  loadStoredCars() {
    const token = this.authService.getToken();
    return this.http.get('https://cars-history-db-cc3ab.firebaseio.com/cars.json?auth=' + token)
      .subscribe(
        (response: Response) => {
          console.log(response);
          const cars: any = response;
          this.setCars(cars)
        }
      )
  }

  updateCar(index: number, newCar: Car) {
    this.cars[index] = newCar;
    this.carsChanged.next(this.cars.slice());
  }

  deleteCar(index: number) {
    this.cars.splice(index, 1);
    this.carsChanged.next(this.cars.slice());
  }

}
