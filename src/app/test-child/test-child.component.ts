import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {

  @Input() message!: string;
  @Output() childMessageEvent= new EventEmitter<string>();
  
  constructor(private cdr : ChangeDetectorRef) {
    
  }

  showChildMessage(){
    this.childMessageEvent.emit("Message from child");
  }
 
  ngOnInit(){
    this.childMessageEvent.emit("Message from child from View Init");
  }

}
