import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { TestRequest } from './test-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iris-portal';

  constructor(private apiService: ApiService){

  }

 
  ngOnInit(){
    var test = {
      "name":"sathish"
    }

    this.apiService.getTest(test).subscribe((res:TestRequest)=>{
      console.log(res);
    });
    this.apiService.getCheck().subscribe((res:string)=>{
      console.log(res);
    });
  }
}
