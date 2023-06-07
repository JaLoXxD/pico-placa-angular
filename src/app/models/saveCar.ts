import { CarModel } from './car';
import { UserModel } from "./user";

export interface SaveCarRequest {
    carInfo: CarModel,
    userInfo: UserModel,
}
export interface SaveCarModel {
    success: string;
    message: string;
    query: CarModel
}