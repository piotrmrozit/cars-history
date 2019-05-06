import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Car } from '../car.model';
import { CarsService } from '../car.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {
  cars: Car[];
  subscription: Subscription;

  constructor(private carService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.carService.carsChanged
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      })
    this.cars = this.carService.getCars();
  }

  onNewCar() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
