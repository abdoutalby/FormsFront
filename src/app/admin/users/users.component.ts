import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users :any; 
  constructor(private service : UserService , private toaster : ToastrService) { }

  ngOnInit(): void {
   
        this.getAllUsers();
  

    }

    
    getAllUsers(){
      this.service.getAllUsers( ).subscribe({
        next:(res)=>{
          console.log(res )
          this.users =res 
        },
        error:(err)=>{
          this.toaster.error(err.error)
        }
      })
    }
   


    updateStatus(id:number ){
      this.service.updateStatus(id  ).subscribe({
        next:(res : any)=>{
        this.toaster.success('status updated')
        this.getAllUsers()
        },
        error:(err : any)=>{
          this.toaster.error(err.error)
        }
      })
    }
  }

 
