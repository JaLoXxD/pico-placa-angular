import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { PicoPlacaTableComponent } from './components/pico-placa-table/pico-placa-table.component';
import { CustomH1Component } from './shared/custom-h1/custom-h1.component';
import { CustomModalComponent } from './shared/custom-modal/custom-modal.component';
import { CloseModalDirective } from './shared/directives/close-modal.directive';
import { CarsTableComponent } from './components/cars-table/cars-table.component';
import { CirculationFormComponent } from './components/circulation-form/circulation-form.component';
import { CreateCarComponent } from './views/create-car/create-car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CirculationComponent } from './views/circulation/circulation.component';
import { SelectedItemComponent } from './shared/selected-item/selected-item.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { CustomSliderComponent } from './shared/custom-slider/custom-slider.component';
import { ChangeSlideDirective } from './shared/custom-slider/change-slide.directive';
import { CirculationCardComponent } from './components/circulation-card/circulation-card.component';
import { ScheduleCardComponent } from './components/schedule-card/schedule-card.component';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';
import { DropdownDirective } from "./shared/directives/dropdown.directive";
import { CustomPaginatorComponent } from './shared/custom-paginator/custom-paginator.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        CarFormComponent,
        PicoPlacaTableComponent,
        CustomH1Component,
        CustomModalComponent,
        CloseModalDirective,
        CarsTableComponent,
        CirculationFormComponent,
        CreateCarComponent,
        NavbarComponent,
        CirculationComponent,
        SelectedItemComponent,
        CustomSliderComponent,
        ChangeSlideDirective,
        CirculationCardComponent,
        ScheduleCardComponent,
        LangSelectorComponent,
        DropdownDirective,
        CustomPaginatorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
