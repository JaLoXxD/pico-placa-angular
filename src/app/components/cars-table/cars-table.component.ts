import { Component, EventEmitter, Output } from '@angular/core';
import { CarModel } from "src/app/models";
import { PicoPlacaService } from "src/app/services/pico-placa.service";

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.sass']
})
export class CarsTableComponent {
  @Output() onSelectCar = new EventEmitter<CarModel>();
  cars: CarModel[]

  constructor(private _picoPlacaService: PicoPlacaService){}

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this._picoPlacaService.getAllCars().subscribe(resp => {
      console.log(resp);
      this.cars = resp.cars;
    })
  }

  setCar(car: CarModel){
    console.log(car)
    this.onSelectCar.emit(car);
  }
}
