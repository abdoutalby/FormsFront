import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EnquetteService } from 'src/app/services/enquette.service';

@Component({
  selector: 'app-enquette',
  templateUrl: './enquette.component.html',
  styleUrls: ['./enquette.component.scss']
})
export class EnquetteComponent implements OnInit {

  id !: any ;

  question!:any;
  type!:any ;
  enquette !: any ;
  questions !: any ;
  constructor(private toaster : ToastrService ,
    private service : EnquetteService,
    private route : ActivatedRoute ) { }

  ngOnInit(): void {
     
      this.id =this.route.snapshot.paramMap.get('id')
      this.getEnquette()
      this.getQuestions()
       
  }

  getEnquette( ){
    this.service.getById(this.id).subscribe({
      next:(res)=>{
          this.enquette = res
          console.log(res , 'enquette from server')
      } , 
      error:(err)=>{
        this.toaster.error('' , err);
      }
    })
  }

  getQuestions(){
    this.service.getQuestions(this.id).subscribe({
        next :  (res)=>{
          this.questions = res
        } , 
        error : (err)=>{
          this.toaster.error('' , err)
        }
    })
  }

  addQuestion(){
    const data ={
      question:this.question , 
      type:this.type,
      status : true
    }
    this.service.addQuestion(this.id, data).subscribe({
      next:(res)=>{
        this.toaster.success('added succsefully '),
        this.getQuestions()
      },
      error: (err)=>{
        this.toaster.error('' , 'something wrong please try again ')
      }
    })
  }

}
