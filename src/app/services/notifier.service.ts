import { Injectable } from '@angular/core';
import { ImageAsset } from "../models";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  title: string = "";
  icon: ImageAsset | null = null;
  visible: Boolean = false;

  constructor() { }

  showModal(title: string, icon: ImageAsset) {
    this.title = title;
    this.icon = icon;
    this.visible = true;
  }

  resetModal() {
    this.title = "";
    this.icon = null;
    this.visible = false;
  }
}
