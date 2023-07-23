export interface CarModel {
  [key: string]: any;
  id?: String;
  plate: String;
  color: String;
  carModel: String;
  chasis: String;
  year: number;
}

export interface CarsListModel {
  success: String;
  message: String;
  cars: CarModel[];
  limit?: number;
  page?: number;
  nextPage?: number;
  prevPage?: number;
  totalDocs?: number;
  totalPages?: number;
}