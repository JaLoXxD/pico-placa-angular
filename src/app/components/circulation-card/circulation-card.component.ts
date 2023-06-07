import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circulation-card',
  templateUrl: './circulation-card.component.html',
  styleUrls: ['./circulation-card.component.sass']
})
export class CirculationCardComponent {
  @Input() plate: any;
}
