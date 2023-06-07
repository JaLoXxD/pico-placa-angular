import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { NotifierService } from "./services";
import { ImageAsset } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private _translate: TranslateService, private _notifierService: NotifierService){
    this._setAppLanguage();
  }

  private _setAppLanguage(){
    this._translate.setDefaultLang('en');
    this._translate.use(this._translate.getBrowserLang() || 'en');
  }

  get visible() : Boolean {
    return this._notifierService.visible;
  }

  get icon() : ImageAsset	| null {
    return this._notifierService.icon;
  }

  get title() : string {
    return this._notifierService.title;
  }
}
