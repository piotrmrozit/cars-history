import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarsService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car;
  id: number;

  constructor(private route: ActivatedRoute, private carService: CarsService, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.car = this.carService.getCar(this.id);
      }
    )
  }

  onEditCar() {
    // this.router.navigate(['edit'], {relativeTo: this.route})
    this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteCar() {
    this.carService.deleteCar(this.id);
    this.router.navigate(['/cars'])
  }

}
