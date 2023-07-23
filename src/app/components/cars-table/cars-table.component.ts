import { Component, EventEmitter, Output } from '@angular/core';
import { CarModel, CarsListModel } from "src/app/models";
import { PicoPlacaService } from "src/app/services/pico-placa.service";
import { PaginationModel, PaginatorModel } from '../../models/general';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.sass']
})
export class CarsTableComponent {
  @Output() onSelectCar = new EventEmitter<CarModel>();
  cars: CarModel[]
  pagination: PaginationModel;
  paginator: PaginatorModel;
  carFilter: string;

  constructor(private _picoPlacaService: PicoPlacaService){}

  ngOnInit(): void {
    this._getCarsByPage(1);
  }

  private _buildPagination(page: number, limit: number): any {
    this.pagination = {
      page,
      limit
    }
  }

  private _buildPaginator(carListModel: CarsListModel): void {
    const { page, limit, totalDocs, totalPages, nextPage, prevPage } = carListModel;
    this.paginator = {
      page,
      limit,
      totalDocs,
      totalPages,
      nextPage,
      prevPage
    }
  }

  private _getCars(){
    this._picoPlacaService.getCars(this.pagination).subscribe(resp => {
      console.log(resp);
      this.cars = resp.cars;
      this._buildPaginator(resp);
    })
  }

  private _filterCars(){
    this._picoPlacaService.filterCars(this.pagination, this.carFilter).subscribe(resp => {
      console.log(resp);
      this.cars = resp.cars;
      this._buildPaginator(resp);
    });
  }

  private _getCarsByPage(page: number){
    this._buildPagination(page, 10);
    this._getCars();
  }

  private _getFilteredCarsByPage(page: number){
    this._buildPagination(page, 10);
    this._filterCars();
  }

  fillTable(page: number){
    if(this.carFilter && this.carFilter != ""){
      this._getFilteredCarsByPage(page);
    }else{
      this._getCarsByPage(page);
    }
  }

  setCar(car: CarModel){
    console.log(car)
    this.onSelectCar.emit(car);
  }
}
