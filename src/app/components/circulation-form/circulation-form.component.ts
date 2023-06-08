import { Component, Input, SimpleChanges } from '@angular/core';
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
    checkCirculationModel: CheckCirculationModel;
    isError: Boolean = false;
    isValidPlate: Boolean = true;
    appConstants: typeof constants = constants;

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
        this._picoPlacaService.checkCirculation(this.checkCirculationModel).subscribe({
            next: (resp) => {
                console.log(resp)
                this._notifierService.showModal(resp.message, this.appConstants.MODAL.ICONS.SUCCESS);
                this._initModel();
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
}
