import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeSlide]'
})
export class ChangeSlideDirective {
  @Input('appChangeSlide') totalSteps: number;
  @Output() currentStep = new EventEmitter<number>();

  private step:number = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    const slider = this.elementRef.nativeElement.querySelector('#stepsSlider');
    console.log(slider)
    console.log(this.step)
    console.log(target)
    if(target.classList.contains("fa-angle-right")){
      this.step++;
      console.log(this.step)
      this.renderer.setStyle(slider, 'transform', `translateX(-${this.step * 100}%)`);
    }
    if(target.classList.contains("fa-angle-left")){
      this.step--;
      this.renderer.setStyle(slider, 'transform', `translateX(${this.step * 100}%)`);
    }
    this.currentStep.emit(this.step);
  }
}
