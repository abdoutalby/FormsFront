import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { Questiontype,   } from 'src/app/models/questionType';
import { AuthService } from 'src/app/services/auth.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { QuestionService } from 'src/app/services/question.service';
@Component({
  selector: 'app-add-enquette',
  templateUrl: './add-enquette.component.html',
  styleUrls: ['./add-enquette.component.scss']
})
export class AddEnquetteComponent implements OnInit {
  titre : string ='enquette titre';
  description  : string = 'enquette discription';
  selected = 'text';
  question = 'question ?'
  questions : any;
  add = false;
  enquette : any;
  first = true;
    types=[Questiontype.checkeckBox ,
    Questiontype.date , 
   Questiontype.paragraph ,
   Questiontype.select , 
   Questiontype.number ,
   Questiontype.text]
  constructor(private toaster : ToastrService ,
    private auth : AuthService,
    private service : EnquetteService , 
    private questionService : QuestionService) { 

    }

  ngOnInit(): void { 
    console.log(this.types , 'types ')
  }

  getEnqQuestions(){
    this.service.getQuestions(this.enquette.id).subscribe({
      next:(res)=>{
        this.questions = res
      }
    })
  }
  showAdd(){
    this.add = !this.add;
  }

  saveQuestion(){
    if(this.first){
    const u = this.auth.user;
     
    if(u){
      
      
      const enq = {
        titre : this.titre ,
        description : this.description , 
        user :u,
        status : true ,
         
      }
      console.log(enq , 'form data ')
     
            
            this.service.create(enq ).subscribe({
              next : (res)=>{
            
                
                console.log(res, 'enquette')
                  this.enquette = res
                  const ques = {
                    question :    this.question,
                    type: this.selected
                     }
                     console.log(ques , 'question to add')
                     this.service.addQuestion(this.enquette.id,ques ).subscribe({
                       next : (res)=>{
                        this.toaster.success('' , 'enqette added succsefully ')
                        console.log(res , 'result of quesion ')
                        this.getEnqQuestions()
                        this.first = false;
                       }, 
                       error : (err)=>{
                         console.error(err)
                       }
                     })
                
              },
              error: (err)=>{
                console.log(err)
                this.toaster.error('' , err.message)
              }
            })
         }
        }else{
          const ques = {
            question :    this.question,
            type: this.selected
             }
          this.service.addQuestion(this.enquette.id,ques ).subscribe({
            next : (res)=>{
             this.toaster.success('' , 'enqette added succsefully ')
             console.log(res , 'result of quesion ')
             this.getEnqQuestions()
         
            }, 
            error : (err)=>{
              console.error(err)
            }
          })
        }

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

    createquestion(){

    }
}