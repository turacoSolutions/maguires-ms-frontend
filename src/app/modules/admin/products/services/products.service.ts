import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = environment.baseUrl + "products";

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  addANewProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, newProduct);
  }

}
