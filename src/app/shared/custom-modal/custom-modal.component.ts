import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageAsset } from '../../models/imageAsset';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.sass']
})
export class CustomModalComponent {
  @Input() title: String | null = 'null';
  @Input() icon: ImageAsset | null = null;
  @Input() showModal: Boolean = false;

  @Output() toogleModalParent = new EventEmitter<Boolean>();

  toggleModal(show: Boolean){
    this.showModal = show;
    this.toogleModalParent.emit(show);
  }

}
