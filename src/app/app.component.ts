import { Component } from '@angular/core';
import { ApiService } from './api.service';

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
    this.apiService.getTest(test).subscribe((res)=>{
      console.log(res.toString);
    });
    this.apiService.getCheck().subscribe((res:string)=>{
      console.log(res);
    });
  }
}
