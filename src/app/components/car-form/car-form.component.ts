import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PicoPlacaService } from '../../services/pico-placa.service';
import { CarModel } from '../../models/car';
import { constants } from '../../constants';
import { ImageAsset } from '../../models/imageAsset';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent {
  @ViewChild("f", { static: true }) form: NgForm;

  carModel: CarModel;
  isError: Boolean = false;
  icon: ImageAsset | null = constants.MODAL.ICONS.SUCCESS;
  showModal: Boolean = false;
  modalTitle: String | null = null;

  constructor(private _picoPlacaService: PicoPlacaService) {
    this._initModel();
  }

  saveCar() {
    this._picoPlacaService.createCar(this.carModel).subscribe({
      next: (resp) => {
        this.icon = constants.MODAL.ICONS.SUCCESS
        this.modalTitle = resp.message;
        this._initModel();
      },
      error: (err) => {
        const { error } = err;
        this.icon = constants.MODAL.ICONS.ERROR
        this.modalTitle = error.message;
        this.showModal = true;
      },
      complete: () => {
        this.showModal = true;
      }
    })
  }

  setError() {
    this.isError = true;
  }

  private _initModel() {
    this.carModel = {
      plate: "",
      color: "",
      carModel: "",
      chasis: "",
      year: 0,
    }
  }

  toggleModal(show: Boolean) {
    this.showModal = show;
  }

}
