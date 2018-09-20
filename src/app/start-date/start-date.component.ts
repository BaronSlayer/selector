import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-start-date',
  templateUrl: './start-date.component.html',
  styleUrls: ['./start-date.component.css']
})

export class StartDateComponent implements OnInit {

  public min: Date = new Date();
  public max: Date = new Date();

  constructor() {  }

  ngOnInit() {
  }

  onSubmit(startDate: Date, daysNum: number) {
    const stDate = moment(startDate);
    console.log('Start date selected: ' + stDate.format('YYYY, M, D'));
    this.min = stDate.toDate();
    console.log('min is: ' + this.min);
    console.log('Number of days: ' + daysNum);
    const endDate = moment(startDate);
    endDate.add(daysNum, 'days');
    console.log('End date is: ' + endDate.format('YYYY, M, D'));
    this.max = endDate.toDate();
  }

}
