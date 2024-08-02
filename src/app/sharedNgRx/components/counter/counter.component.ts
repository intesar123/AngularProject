import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
    count!:number;


    constructor(private store: Store<{counter:{counter:number}}>){
      
    }
    ngOnInit(){
      this.store.select('counter').subscribe(data=>{
        this.count=data.counter;
      });
    }
    increment(){
      this.store.dispatch(increment())
    }
    decrement(){
      this.store.dispatch(decrement())
    }
    reset(){
      this.store.dispatch(reset())
    }
}
