import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { SharkDirective } from './viewChileExample/withDirective/shark.directive';
import { PupComponent } from './viewChileExample/withComponent/pup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parentMessage!: string;
  childMessage!: string;


  // ViewChild with directive
  creatureName!:string;

  @ViewChild(SharkDirective)
  set appShark(directive:SharkDirective){
    this.creatureName= directive.creature;
  }

  // ViewChild with DOM
  @ViewChild("someInput") someInput!:ElementRef;

  // ViewChild with child component
  @ViewChild(PupComponent) pup!: PupComponent;


/////////////////////////////////////

  constructor() {
    this.parentMessage = "Message From Parent"
  }

  ngAfterViewInit(){
 // ViewChild with directive
    console.log("Value from View Child: "+this.creatureName);
 // ViewChild with DOM
    this.someInput.nativeElement.value="Whale !";
// ViewChild with child component
    console.log(this.pup.whoAmI());
  }

  showChildMessage(event: any) {
    this.childMessage=event;
  }

}
