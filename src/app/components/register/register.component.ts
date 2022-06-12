import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username!: string;
  password!: string;
  name!: string;
  tel!: string;
  etablissement!: string;
  email!: string;

  constructor(
    private service: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  verif() {
    if (!this.username) {
      this.toastr.error('username required');
      return false;
    }else
    if (!this.password) {
      this.toastr.error('password required');
      return false;
    }else
    if (!this.email) {
      this.toastr.error('email required');
      return false;
    }else
    if (!this.etablissement) {
      this.toastr.error('etablissement required');
      return false;
    }else
    if (this.tel.length != 8) {
      this.toastr.error('tel required');
      return false;
    }
    return true;
  }

  register() {
    if (this.verif()) {
      const userData = {
        username: this.username,
        password: this.password,
        name: this.name,
        email: this.email,
        etablissement: this.etablissement,
        tel: this.tel,
        role: ['user'],
      };
      this.service.register(userData).subscribe({
        next: (res) => {
          console.log(res, 'response from the server');
          this.toastr.success(' ', 'you are ready to login ');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error(err);
          this.toastr.error(err.error, 'OOPS!');
        },
      });
    }
  }
}
