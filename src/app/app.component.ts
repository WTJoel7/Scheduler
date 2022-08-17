import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schedule';

  public setView ="Month";
}
