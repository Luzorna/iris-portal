import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TestRequest} from './test-request';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl : string = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) { }

  public getTest(testGet:TestRequest){
    return this.httpClient.post(`${this.apiUrl}/testGet/`,testGet);
  }

  public getCheck(){
    return this.httpClient.get(`${this.apiUrl}/getCheck`);
  }

}
