import { Component, Input, SimpleChanges } from '@angular/core';
import { CarModel, CheckCirculationModel } from "src/app/models";
import { PicoPlacaService } from "src/app/services/pico-placa.service";

@Component({
  selector: 'app-circulation-form',
  templateUrl: './circulation-form.component.html',
  styleUrls: ['./circulation-form.component.sass']
})
export class CirculationFormComponent {
  @Input() currentCar: CarModel | null = null;
  checkCirculationModel: CheckCirculationModel;
  isError: Boolean = false;

  constructor(private _picoPlacaService: PicoPlacaService) { }

  ngOnInit(): void {
    this._initModel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentCar } = changes;
    if(currentCar.currentValue){
      this.checkCirculationModel.plate = currentCar.currentValue.plate
    }
  }

  checkCirculation() {
    this.checkCirculationModel.date = new Date();
    this._picoPlacaService.checkCirculation(this.checkCirculationModel).subscribe(resp => {
      console.log(resp)
    });
  }

  setError() {
    this.isError = true;
  }

  private _initModel() {
    this.checkCirculationModel = {
      plate: "",
      date: null,
    }
  }
}
