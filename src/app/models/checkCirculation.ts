import { CarModel } from "./car";

export interface CheckCirculationModel {
    plate: String;
    date: Date | null;
}

export interface CheckCirculationResponseModel {
    success: Boolean;
    message: String;
    car: CarModel | null;
    allowed: Boolean;
    info: infoModel;
}

interface infoModel{
    currentDate: Date;
    inputDate: Date;
}