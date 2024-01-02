import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  endpoint = ' http://localhost:8001/api/Products';
  endpoint1 = ' http://localhost:8000/api/Products';
  constructor(private http: HttpClient) {
       }
  all():Observable<Product[]>{
    return this.http.get<Product[]>(this.endpoint1);
  }

  like(id:number): Observable<Product>{
    return this.http.post<Product>(`${this.endpoint}/${id}/likes`, {})
  }
}
