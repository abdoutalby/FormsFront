import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { QuestionService } from 'src/app/services/question.service';
 

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.scss']
})
export class QuestionEditComponent implements OnInit {
  titre !: any ;
  type !: any ;
  edit = false;
  @Output()
  deleteEvent :EventEmitter<any> = new EventEmitter<any>()

  @Output()
  StatusEvent : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  question !: any;
  constructor(private service : QuestionService , private toaster : ToastrService) { }

  ngOnInit(): void {
    
  }
 
  changeStauts(){
    this.StatusEvent.emit()
  
}

delete( ){
  this.deleteEvent.emit(this.question)
}
}
