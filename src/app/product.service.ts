import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL="https://api.myjson.com/bins/";
  constructor(private http:HttpClient) { }
  getHttpData(){
    return this.http.get(this.baseURL+"8sclj")
  }
}
