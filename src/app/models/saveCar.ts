import { CarModel } from './car';
export interface SaveCarModel {
    success: String;
    message: String;
    query: CarModel
}