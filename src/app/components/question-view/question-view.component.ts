import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Questiontype } from 'src/app/models/questionType';
 

@Component({
  selector: 'app-question-view',
  templateUrl: './question-view.component.html',
  styleUrls: ['./question-view.component.scss']
})
export class QuestionViewComponent implements OnInit {
@Input()
question : any

@Output()
repondreEvent : EventEmitter<any>  = new EventEmitter()


response : any ;
checked:any =[] ;
types=[Questiontype.checkeckBox ,
  Questiontype.date , 
 Questiontype.paragraph ,
 Questiontype.select , 
 Questiontype.number ,
 Questiontype.text]
  constructor() { }

  ngOnInit(): void {

  }

  setchecked(e  : any){
    console.log(e)
    this.checked+= e.source.id + ' | ';
    this.response = this.checked
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  repondre(){
    console.log(this.response , 'response ')
    this.repondreEvent.emit(this.response);
  }
}
