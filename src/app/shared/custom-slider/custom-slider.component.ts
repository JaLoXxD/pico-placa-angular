import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.sass']
})
export class CustomSliderComponent {
  currentStep: number = 0;
  totalSteps: number = 2;

  getCurrentStep(step: number){
    console.log(step);
    this.currentStep = step;
  }
}
