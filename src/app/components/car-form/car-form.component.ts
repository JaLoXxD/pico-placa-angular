import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { SaveCarRequest } from "src/app/models";
import { UserModel } from "src/app/models/user";
import { NotifierService, PicoPlacaService } from "src/app/services";
import { constants } from '../../constants';
import { CarModel } from '../../models/car';

@Component({
    selector: 'app-car-form',
    templateUrl: './car-form.component.html',
    styleUrls: ['./car-form.component.sass']
})
export class CarFormComponent {
    @ViewChild("f", { static: true }) form: NgForm;

    carModel: CarModel;
    userModel: UserModel;
    saveCarRequest: SaveCarRequest;
    isError: Boolean = false;
    appConstants: typeof constants = constants;

    constructor(private _picoPlacaService: PicoPlacaService, private _notifierService: NotifierService) {
        this._initModels();
    }

    saveCar() {
        this._buildRequest();
        this._picoPlacaService.createCar(this.saveCarRequest).subscribe({
            next: (resp) => {
                this._notifierService.showModal(resp.message, this.appConstants.MODAL.ICONS.SUCCESS);
                this._initModels();
            },
            error: (err) => {
                const { error } = err;
                this._notifierService.showModal(error.message, this.appConstants.MODAL.ICONS.ERROR);
                debugger;
            },
        })
    }

    setError() {
        this.isError = true;
    }

    private _initModels() {
        this.carModel = {
            plate: "",
            color: "#ffffff",
            carModel: "",
            chasis: "",
            year: 0,
        }

        this.userModel = {
            name: "",
            email: "",
            phoneNumber: "",
        }
    }

    private _buildRequest() {
        this.saveCarRequest = {
            carInfo: this.carModel,
            userInfo: this.userModel,
        }
    }
}
