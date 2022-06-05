import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnquetteService } from 'src/app/services/enquette.service';
 
@Component({
  selector: 'app-enquette',
  templateUrl: './enquette.component.html',
  styleUrls: ['./enquette.component.scss']
})
export class EnquetteComponent implements OnInit {
id : any 
questions : any;
enquette : any
  constructor(private route : ActivatedRoute , private service : EnquetteService) { }

  ngOnInit(): void {
  this.id =   this.route.snapshot.params['id']
    this.getEnquette()
  this.getQuestions()
    
  }
  getEnquette(){
    this.service.getById(this.id).subscribe({
      next : (res)=> this.enquette = res , 
      error: (err)=>  console.error(err)
      
    })
  }
  
  getQuestions(){
    this.service.getQuestions(this.id).subscribe({
      next : (res)=>{
        this.questions = res ;
        
      },
      error : (err)=>{
        console.error(err)
      }
    })
  }

}
