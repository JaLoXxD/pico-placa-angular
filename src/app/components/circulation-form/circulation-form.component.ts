import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { constants } from "src/app/constants";
import { CarModel, CheckCirculationModel } from "src/app/models";
import { NotifierService, PicoPlacaService } from "src/app/services";

@Component({
  selector: 'app-circulation-form',
  templateUrl: './circulation-form.component.html',
  styleUrls: ['./circulation-form.component.sass']
})
export class CirculationFormComponent {
  @Input() currentCar: CarModel | null = null;
  @Output() onChangeCar = new EventEmitter<CarModel | null>();

  appConstants: typeof constants = constants;
  checkCirculationModel: CheckCirculationModel;
  isError: Boolean = false;
  isValidPlate: Boolean = true;

  constructor(private _picoPlacaService: PicoPlacaService, private _notifierService: NotifierService) { }

  ngOnInit(): void {
    this._initModel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { currentCar } = changes;
    if (currentCar.currentValue) {
      this.checkCirculationModel.plate = currentCar.currentValue.plate
    }
  }

  checkCirculation() {
    this.checkCirculationModel.date = new Date();
    this.checkCirculationModel.plate = this.checkCirculationModel.plate.toUpperCase();
    this._picoPlacaService.checkCirculation(this.checkCirculationModel).subscribe({
      next: (resp) => {
        console.log(resp)
        this._notifierService.showModal(resp.message, this.appConstants.MODAL.ICONS.SUCCESS);
        this._initModel();
        this.onChangeCar.emit(null);
      },
      error: (err) => {
        const { error } = err;
        this._notifierService.showModal(error.message, this.appConstants.MODAL.ICONS.ERROR);
      }
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

  checkPlate() {
    this.isValidPlate = this._picoPlacaService.isValidPlate(this.checkCirculationModel.plate);
  }

  resetPlateValidator() {
    this.isValidPlate = true;
  }

  formatCarPlate(newValue: string, input: HTMLInputElement): void {
    newValue = newValue.replace(/[^a-zA-Z0-9]/g, "");
    const match = newValue.match(/^([A-Za-z]{3})-?(\d+)$/);
    const hasNumbers = newValue.match(/^[^0-9]/) ? false : true;
    if(hasNumbers){
      input.value = '';
      return;
    }
    if (match) {
      input.value = `${match[1]}-${match[2]}`;
      
    } else {
      input.value = newValue.length <= 3 ? newValue : newValue.substring(0, 3);
    }
  }
}
