import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '@bugsnag/js';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  private baseUrl = environment.baseUrl + "clients";

  constructor(private httpClient: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseUrl)
  }

}
