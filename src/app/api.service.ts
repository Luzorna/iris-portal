import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestRequest} from './test-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : string = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  public getTest(testGet:TestRequest): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/testGet/`,testGet);
  }

  public getCheck():Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/getCheck`);
  }

}
