import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
 import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string ;
  pwd!: string ;
  constructor(private service: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    const Data = {
      username : this.username ,
      password : this.pwd
    } 
    this.service.login(Data).subscribe(
      {
        next: (res) => {  
            localStorage.setItem("token" , res.accessToken);
            localStorage.setItem('user' ,JSON.stringify( res.user));
            if(this.service.isLoggedAdmin()){
              this.router.navigate(['/admin/dashboard'])
            }
          else{
            if(res.user.status){
          this.router.navigate(['/home'])
          
            }else {
              this.toastr.error(' inactive account   ', 'OOPS!');
              this.username = ''
              this.pwd = ''
            }

          }
        },
        error: (err) => {
          this.username = ''
          this.pwd = ''
          this.toastr.error(' Bad  credantials  ', 'OOPS!');
        }

      }
    )
  }



}
