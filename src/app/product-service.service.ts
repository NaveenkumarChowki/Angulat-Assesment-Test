import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl="https://api.myjson.com/bins"

  constructor(private http:HttpClient) { }
  getHttpData():Observable<any>{
    return this.http.get(this.baseUrl+"/8sclj")
  };
}
