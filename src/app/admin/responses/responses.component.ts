import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  constructor( private service : ResponseService) { }

  ngOnInit(): void {
  
  }

  getAll(){
    this.service.getAllByEnq().subscribe({
      next: (res)=>{
        console.log(res)
      }, 
      error:(err)=>{
        console.error(err)
      }
    })
  }

  getById(id: any){
    this.service.getById(id).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }


  getByQuestion(idq: any){
    this.service.getByQuestion(idq).subscribe({
      next: (res)=>{
        console.log(res)
      }, 
      error:(err)=>{
        console.error(err)
      }
    })
  }

}
