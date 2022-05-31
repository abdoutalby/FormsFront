import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  admins !: any ;
  show =false;

  username !: string  
  password!: string ;
  name !: string  
  tel !: string 
  etablissement !: string 
  email !: string 
  constructor(private service : UserService ,private auth : AuthService, private router : Router , private toaster : ToastrService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.service.getAllAdmins().subscribe({
      next: (res)=>{
        this.admins = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  changeShow(){
    this.show = !this.show;
  }



  addAdmin() {
    const  Data = {
      username :this.username,
      password: this.password,
      name: this.name,
      email : this.email,
      etablissement:this.etablissement,
      tel :this.tel,
      status : true,
      role: ['admin']
    }

     
    this.auth.register( Data ).subscribe(
      {
        next: (res : any) => {
          console.log(res, 'response from the server')
          this.toaster.success(' ', 'admin added successefly ');
          this.getAll()
          this.changeShow()
           
        },
        error: (err : any) => {
          console.error(err)
          this.toaster.error(err.error, 'OOPS!');
        }

      }
    )

  
    }


    delete(id : any){
      this.service.deleteUser(id).subscribe({
        next:(res)=>{
          this.toaster.success('' , 'admin removed ')
          this.getAll();
        },
        error:(err)=>{
          this.toaster.error(err)
        }

      })
    }
}
