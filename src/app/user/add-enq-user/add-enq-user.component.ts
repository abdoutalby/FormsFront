import { Component, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questiontype } from 'src/app/models/questionType';
import { AuthService } from 'src/app/services/auth.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-enq-user',
  templateUrl: './add-enq-user.component.html',
  styleUrls: ['./add-enq-user.component.scss'],
})
export class AddEnqUserComponent implements OnInit {
  titre: string = 'enquette titre';
  description: string = 'enquette discription';
  selected = 'text';
  question = 'question ?';
  options : string []= [] ;
  option= 'option one ' ;
  questions: any;
  add = true;
  enquette: any;
  first = true;
  types = [
    Questiontype.checkeckBox,
    Questiontype.date,
    Questiontype.paragraph,
    Questiontype.select,
    Questiontype.number,
    Questiontype.text,
  ];


  themes =[
    {
      color : "black",
      selected : "false"
    } ,
    {
      color : "white",
      selected : "false"
    } , {
      color : "gray",
      selected : "false"
    } , {
      color : "green",
      selected : "true"
    } , {
      color : "blue",
      selected : "false"
    } 
  ]
  selectedTheme : any;

  constructor(
    private toaster: ToastrService,
    private auth: AuthService,
    private service: EnquetteService,
    private questionService: QuestionService,
    private router : Router
  ) {}

  ngOnInit(): void {
    console.log(this.types, 'types ');
  }
  checkboxAddOption() {}
  getEnqQuestions() {
    this.service.getQuestions(this.enquette.id).subscribe({
      next: (res) => {
        this.questions = res;
        
      },
    });
  }
  showAdd() {
    this.add = !this.add;
  }

  changeTheme(){
    this.themes= this.themes.filter(t=>t.color===this.selectedTheme)

   this.service.addtheme(this.enquette.id, this.themes[0]).subscribe({
     next : (res )=>{
       console.log(res)
        
     },
     error :(err)   =>{
       console.log(err)
     }
   })
 }
  deleteOption(option : any){
   this.options.splice(this.options.indexOf(option),1)
  }

  saveQuestion() {
    if (this.first) {
      const u = this.auth.user;

      if (u) {
        const enq = {
          titre: this.titre,
          description: this.description,
          user: u,
          status: true,
        };
        console.log(enq, 'form data ');
        this.service.create(enq).subscribe({
          next: (res) => {
            console.log(res, 'enquette');
            this.enquette = res;
            const ques = {
              question: this.question,
              type: this.selected,
              options: this.options
            };
            console.log(ques, 'question to add');
            this.service.addQuestion(this.enquette.id, ques).subscribe({
              next: (res) => {
                this.toaster.success('', 'enqette added succsefully ');
                console.log(res, 'result of quesion ');
                this.question =''
                this.option=''
                this.options=[]
                this.selected = 'text'
                this.getEnqQuestions();
                this.first = false;
              },
              error: (err) => {
                console.error(err);
              },
            });
          },
          error: (err) => {
            console.log(err);
            this.toaster.error('', err.message);
          },
        });
      }
    } else {
      const ques = {
        question: this.question,
        type: this.selected,
        options: this.options
      };
      this.service.addQuestion(this.enquette.id, ques).subscribe({
        next: (res) => {
          this.toaster.success('', 'enqette added succsefully ');
          console.log(res, 'result of quesion ');
          this.question =''
          this.selected = 'text'
          this.option=''
          this.options=[]
          this.getEnqQuestions();
        },
        error: (err) => {
          console.error(err);
        },
      });
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

  createquestion() {}

  addOption(){
    this.options.push(this.option)
    this.option = '';
  }

  delete(){
    if(this.enquette){
      this.service.delete(this.enquette.id).subscribe({
        next:(res)=>{
          this.toaster.success('deleted')
          this.router.navigate(['/user/myenquettes'])
        }
      })
    }
  }
}
