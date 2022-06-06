import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Enquette } from 'src/app/models/enquette';
import { AuthService } from 'src/app/services/auth.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-enquettes',
  templateUrl: './enquettes.component.html',
  styleUrls: ['./enquettes.component.scss']
})
export class EnquettesComponent implements OnInit {
  ELEMENT_DATA: Enquette[] = []
  FILTERED_DATA: Enquette[] = []
  dataSource = new MatTableDataSource<Enquette>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['title','Demandeur',"Description",'Action'];
  enq:Enquette = {
    titre:'',
    description:'',
    id:'',
    user:'',
   
   }
  
  constructor(private toaster : ToastrService ,
    private auth : AuthService,
    private service : EnquetteService , 
     private router : Router) { }

  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.service.getall().subscribe(response => {
    this.ELEMENT_DATA = response;
    this.dataSource = new MatTableDataSource<Enquette>(response);
    this.dataSource.paginator = this.paginator;
    console.log(response);
    
    })
  }

 


   

    edit(id : number){
      this.router.navigate(['/admin/enquettes/'+id])
    }
     
      
  

  delete (id : number){
    this.service.delete(id).subscribe({
      next : (res)=>{
this.toaster.success('' , 'delete clicked with '+id)
this.getall()
      },
      error:(err)=>{
        this.toaster.error('' , err.message)
      }
    })
    
  }
}
