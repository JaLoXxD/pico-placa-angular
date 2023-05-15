import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { PicoPlacaTableComponent } from './components/pico-placa-table/pico-placa-table.component';
import { CustomH1Component } from './shared/custom-h1/custom-h1.component';
import { CustomModalComponent } from './shared/custom-modal/custom-modal.component';
import { CloseModalDirective } from './shared/directives/close-modal.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    PicoPlacaTableComponent,
    CustomH1Component,
    CustomModalComponent,
    CloseModalDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
