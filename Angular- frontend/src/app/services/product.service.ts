import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = ' http://localhost:8000/api/Products';
  constructor(private http: HttpClient) {
       }
  all():Observable<Product[]>{
    return this.http.get<Product[]>(this.endpoint);
  }
  get(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.endpoint}/${id}`)
  }
  create(data:any): Observable<Product>{
    return this.http.post<Product>(this.endpoint, data);
  }
  update(id:number, data:any): Observable<Product>{
    return this.http.put<Product>(`${this.endpoint}/${id}`,data)
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
  
}
