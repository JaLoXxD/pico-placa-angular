import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from "./views/create-car/create-car.component";
import { CirculationComponent } from "./views/circulation/circulation.component";

const routes: Routes = [
  { path: '', component: CirculationComponent },
  { path: 'addCar', component: CreateCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
