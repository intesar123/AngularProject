import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVeiwChildTest]'
})
export class VeiwChildTestDirective {
  renderTest="View Child Test Using Renderer";
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    let rendTest = renderer.createText("Directive Test Using Renderer");
    renderer.appendChild(el.nativeElement,rendTest);
  }
}
