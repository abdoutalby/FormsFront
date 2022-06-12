import { Component, Input, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-question-responses',
  templateUrl: './question-responses.component.html',
  styleUrls: ['./question-responses.component.scss']
})
export class QuestionResponsesComponent implements OnInit {

  @Input()
  question : any ;
  responses : any ;

  showres = false ;
  constructor(private service : ResponseService) { }

  ngOnInit(): void {
    this.getAllResponses()
  }

  getAllResponses(){
      this.service.getByQuestion(this.question.id).subscribe({
        next:(res)=>{ this.responses = res  
        
        console.log(this.responses)},
        error:(err)=>{
          console.log(err.message)
        }
      })
  }

}
