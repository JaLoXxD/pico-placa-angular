export interface CarModel {
    id?: String;
    plate: String;
    color: String;
    carModel: String;
    chasis: String;
    year: Number;
}

export interface CarsListModel {
    success: String;
    message: String;
    cars: CarModel[];
}