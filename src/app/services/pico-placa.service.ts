import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';
import { CarsListModel, CheckCirculationModel, CheckCirculationResponseModel, SaveCarModel, SaveCarRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PicoPlacaService {

  constructor(private _http: HttpClient) {}

  createCar(body: SaveCarRequest): Observable<SaveCarModel>{
    return this._http.post<SaveCarModel>(`${environment.apiUrl}/createCar`, body);
  }

  getAllCars(): Observable<CarsListModel>{
    return this._http.get<CarsListModel>(`${environment.apiUrl}/cars`);
  }

  checkCirculation(body: CheckCirculationModel): Observable<CheckCirculationResponseModel>{
    return this._http.post<CheckCirculationResponseModel>(`${environment.apiUrl}/checkCar`, body);
  }
}
