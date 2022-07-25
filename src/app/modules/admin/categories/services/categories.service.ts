import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = environment.baseUrl + "categories";

  constructor(private httpClient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  addANewCategory(newCategory: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl, newCategory);
  }
}
