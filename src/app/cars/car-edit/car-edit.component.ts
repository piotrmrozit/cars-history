import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from './../car.model';
import { CarsService } from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id: number;
  editMode = false;
  editCarForm: FormGroup;
  editedCarIndex: number;
  editedCar: Car;

  constructor(private router: Router, private route: ActivatedRoute, private carService: CarsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm(); 
        }
    )
  }

  private initForm() {
    let carMark: string; 
    let carModel: string; 
    let carPower: number; 
    let carImageUrl: string; 

    if(this.editMode) {
      const car = this.carService.getCar(this.id);
      carMark = car.mark;
      carModel = car.model;
      carPower = car.power;
      carImageUrl = car.imageUrl;
    }

    this.editCarForm = new FormGroup({
      'mark': new FormControl(carMark, Validators.required),
      'model': new FormControl(carModel, Validators.required),
      'power': new FormControl(carPower, Validators.required),
      'imageUrl': new FormControl(carImageUrl)
    });
  }

  onSubmit() {
    const newCar = this.editCarForm.value;
    if(this.editMode) {
        this.carService.updateCar(this.id, newCar);
    } else {
        this.carService.addCar(newCar);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
