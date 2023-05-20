import { Component } from '@angular/core';
import { CarModel } from "src/app/models";

@Component({
  selector: 'app-circulation',
  templateUrl: './circulation.component.html',
  styleUrls: ['./circulation.component.sass']
})
export class CirculationComponent {
  currentCar: CarModel | null = null;

  setCar(car: CarModel){
    this.currentCar = car;
  }
}
