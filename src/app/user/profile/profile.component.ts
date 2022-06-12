import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user : any ;
  pwd = '' ;
  pwdc='' ;
  changePwd = false;

  constructor(private auth : AuthService ,  
      private  userService : UserService, 
    private toaster : ToastrService)  { }

  ngOnInit(): void {
  this.user = this.auth.LoggedInUser()
    console.log(this.user)
  }
  update(){
    if(this.pwd!=this.pwdc){
        this.toaster.error('plesase verify pwd confirmations')
    }else{
      this.userService.updateUser(this.user).subscribe({
        next : (res)=>{
          this.toaster.success('updated succefully ')
        },
        error : (err)=>{
          this.toaster.error('', err.error.error)
        }
      })
    }
  }

}
