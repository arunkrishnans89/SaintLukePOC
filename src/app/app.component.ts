import { Component } from '@angular/core';
import { testService } from './service/test.service';
import { scheduleModel } from './model/schedule.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[testService]
})
export class AppComponent {

  constructor(private _testService: testService) { }

  scheduleTitle: String;
  scheduleDisc: String;
  scheduleTime: String;

  ngOnInit(): void {

    this._testService.getScheduleData().subscribe(

      (data: any[]) => {
       
        // debugger;
        // this.scheduleTitle = data[0].schedulesTitle;
        // this.scheduleDisc = data[0].schedulesdesc;
        // this.scheduleTime = data[0].schedulesTime;
        console.log(data);
      }
    )

  }
}
