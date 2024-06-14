import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-async-pipe-test',
  templateUrl: './async-pipe-test.component.html',
  styleUrls: ['./async-pipe-test.component.css']
})
export class AsyncPipeTestComponent {

  time: Observable<string>;

  constructor() {
      this.time= new Observable((observer)=>{
        setInterval(()=>{
          observer.next(new Date().toString())
        },1000)
      });
    
  }

}
