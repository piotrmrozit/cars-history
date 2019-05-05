import { Injectable } from '@angular/core';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
    new Car('Honda', 'CRX', 125, 'https://img.favcars.com/honda/crx/images_honda_crx_1992_1_800x600.jpg'),
    new Car('Honda', 'Prelude', 130, 'http://www.v10.pl/archiwum/tuning/honda/prelude_wiejski_tuning/honda_prelude_iv_gen_2.jpg')
  ]

  getCars() {
    return this.cars.slice();
  }

  getCar(index: number) {
    return this.cars[index];
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  updateCar(carId: number, car: Car) {

  }

}
