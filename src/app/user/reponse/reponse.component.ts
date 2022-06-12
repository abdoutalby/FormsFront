import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 
import { EnquetteService } from 'src/app/services/enquette.service';
import { ResponseService } from 'src/app/services/response.service';
 
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss'],
})
export class ReponseComponent implements OnInit {
  id: any;
  enqutte : any ;
  questions : any ;
  reponses : any ;
  x : any ;
  constructor(
    private toastService: ToastrService,
    private route: ActivatedRoute,
    private service: ResponseService,
    private enquetteService : EnquetteService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.getEnquette()
    
  }

  export(q: any){
    this.service.getCSV(q.id).subscribe({
      next:(res : any)=>{
        const blob1 = new Blob([res], { type: 'text/csv' });
        FileSaver.saveAs(blob1, q.question+'.csv');
        this.toastService.success('' , 'file donwloaded')
      },
      error:(err)=>{
        this.toastService.error(err.error.error,'oops')
        console.log(err.message)
      }
    })
  }
  getEnquette() {
    this.enquetteService.getById(this.id).subscribe({
      next : (res)=>{
        this.enqutte = res 
        this.enquetteService.getQuestions(this.enqutte.id).subscribe({
          next:(res)=>{
            this.questions =res 
            console.log(this.questions)
          },
          error:(err)=>{
            this.toastService.error(' questions ',err.message)
          }
        })
      }, 
      error:(err)=>{
        this.toastService.error(err.message)
      }
    })
  }

  getResponses(id : any){
      this.service.getByQuestion(id).subscribe({
        next:(res)=>{
          console.log(res)
          this.x =res 
        }
      })
  }
}
