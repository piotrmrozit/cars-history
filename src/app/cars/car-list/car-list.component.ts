import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Car } from '../car.model';
import { CarsService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

  onNewCar() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
