import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private router : Router,private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.lougout();
    this.router.navigate(['/'])
  }
}
