import { Component, Input } from '@angular/core';
import { ImageAsset } from "src/app/models";
import { NotifierService } from "src/app/services";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.sass']
})
export class CustomModalComponent {
  @Input() title: string | null = 'null';
  @Input() icon: ImageAsset | null = null;
  @Input() showModal: Boolean = false;

  constructor(private _notifierService: NotifierService) {}

  toggleModal(show: Boolean){
    this.showModal = show;
    this._notifierService.visible = show;
  }

}
