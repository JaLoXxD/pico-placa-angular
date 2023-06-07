import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { constants } from "src/app/constants";
import { LangModel } from "src/app/models";

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.sass']
})
export class LangSelectorComponent {
    appConstants: typeof constants = constants;
    currentLang: LangModel;
    showOptions: Boolean = false


    constructor(private _translate: TranslateService){}

    ngOnInit(): void {
        this.setCurrentLang();
    }

    toogleOptions() {
        this.showOptions = !this.showOptions;
    }

    setLang(lang: string) {
        this._translate.use(lang);
        this.setCurrentLang();
    }

    setCurrentLang(){
        const currLang = this._translate.currentLang;
        this.currentLang = this.appConstants.LANG_OPTIONS.filter(option => option.LANG === currLang)[0];
    }
}
