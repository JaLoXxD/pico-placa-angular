import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-h1',
  templateUrl: './custom-h1.component.html',
  styleUrls: ['./custom-h1.component.sass']
})
export class CustomH1Component {
  @Input() title: String;
  @Input() centered: Boolean = false;

}
