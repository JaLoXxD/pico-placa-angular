import { Component } from '@angular/core';
import { constants } from "src/app/constants";
import { CarModel, SelectedItemModel } from "src/app/models";

@Component({
    selector: 'app-circulation',
    templateUrl: './circulation.component.html',
    styleUrls: ['./circulation.component.sass']
})
export class CirculationComponent {
    currentCar: CarModel | null = null;
    items: SelectedItemModel[] | null = null;
    appConstants: typeof constants = constants;

    setCar(car: CarModel) {
        this.currentCar = car
        console.log(this.currentCar)
        this.items = Object.keys(this.currentCar).map((key: string) => {
            return {
                label: `carInfo.${key}`,
                value: this.currentCar![key]
            }
        }).filter(item => item.label !== "carInfo._id" && item.label !== "carInfo.user");
    }
}
