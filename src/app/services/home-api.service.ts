import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeAPIService {

  constructor(private httpClient:HttpClient) { }

  getData():Observable<any>{
    return this.httpClient.get('https://api.npoint.io/d8974e2a83b76da4e84d');
  }
}
