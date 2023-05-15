import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment.development';
import { CarModel, SaveCarModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PicoPlacaService {

  constructor(private _http: HttpClient) {}

  createCar(body: CarModel): Observable<SaveCarModel>{
    return this._http.post<SaveCarModel>(`${environment.apiUrl}/createCar`, body);
  }
}
