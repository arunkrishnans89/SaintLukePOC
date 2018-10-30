import { Component } from '@angular/core';
import { testService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _testService:testService){}

  ngOnInit():void{
    
    this._testService.getScheduleData().subscribe(
     
      (data:any[])=>{
        console.log(data);
      }
    )

  }
}
