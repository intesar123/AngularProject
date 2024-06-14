import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-get-categories',
  templateUrl: './get-categories.component.html',
  styleUrls: ['./get-categories.component.css']
})
export class GetCategoriesComponent {
  categories!:any;
  constructor(private canActivate: ActivatedRoute) {
  
  }

  ngOnInit(){

    //*******************Resolver Usage************************/
    // 1
     this.categories= this.canActivate.data.pipe(map(data=>data['categories']));

     // 2
     this.canActivate.data.subscribe(data=>{
      console.log(data['categories']);
     })

     // 3

     console.log("using snapshot");
     console.log(this.canActivate.snapshot.data['categories']);

  }

}
