import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-enquettes',
  templateUrl: './enquettes.component.html',
  styleUrls: ['./enquettes.component.scss']
})
export class EnquettesComponent implements OnInit {

  enquettes !: any ;

  showAdd = false ;

  titre!: string ;
  description !: string;
  constructor(private toaster : ToastrService ,
    private auth : AuthService,
    private service : EnquetteService , 
     private router : Router) { }

  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.service.getall().subscribe({
      next : (res)=>{this.enquettes = res},
      error:(err)=>{
        this.toaster.error('' , err.message)
      }
    })
  }

  changeShowAdd(){
    this.showAdd = !this.showAdd;
  }

  create(){ 
    const u = this.auth.user;
     
    if(u){
      const user = JSON.parse(u);
      
      const enq = {
        titre : this.titre ,
        description : this.description , 
        user :user,
        status : true 
      }
      console.log(enq , 'form data ')
     
            
            this.service.create(enq ).subscribe({
              next : (res)=>{
                this.enquettes.push(res)
                this.toaster.success('' , 'enqette added succsefully ')
                this.changeShowAdd()
              },
              error: (err)=>{
                console.log(err)
                this.toaster.error('' , err.message)
              }
            })
         }
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
