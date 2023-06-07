import { CarModel } from "./car";

export interface CheckCirculationModel {
    plate: string;
    date: Date | null;
}

export interface CheckCirculationResponseModel {
    success: Boolean;
    message: string;
    car: CarModel | null;
    allowed: Boolean;
    info: infoModel;
}

interface infoModel{
    currentDate: Date;
    inputDate: Date;
}