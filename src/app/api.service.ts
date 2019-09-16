import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestRequest} from './test-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : string = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  public getTest(testGet:TestRequest): Observable<string>{
    return this.httpClient.post<string>(`${this.apiUrl}/testGet/`,testGet,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }

  public getCheck():Observable<string>{
    return this.httpClient.get<string>(`${this.apiUrl}/getCheck`);
  }

}
