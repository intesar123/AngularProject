import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getCategories():Observable<any>{
    return this.http.get("https://localhost:7271/api/Dashboard/GetProductCategories").pipe(catchError(this.handleError.bind(this)));
  }

  private handleError(err:HttpErrorResponse){
    console.error(err);

    return throwError(err);
  }

}
