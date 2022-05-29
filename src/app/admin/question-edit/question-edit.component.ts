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
  @Input()
  question !: any;
  constructor(private service : QuestionService , private toaster : ToastrService) { }

  ngOnInit(): void {
    
  }
 
  changeStauts(){
 
  this.service.changeStatus(this.question.id).subscribe({
    next: ()=>{
      this.toaster.success('' , 'status changed clicked')
    }
  })
}

delete( ){
  this.deleteEvent.emit()
}
}
