import { Component, Input } from '@angular/core';
import { SelectedItemModel } from "src/app/models";

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.sass']
})
export class SelectedItemComponent {
  @Input() title: String | null = null;
  @Input() description: String | null = null;
  @Input() items: SelectedItemModel[] | null;
  
}
