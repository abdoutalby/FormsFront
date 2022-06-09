import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EnquetteService } from 'src/app/services/enquette.service';
import { QuestionService } from 'src/app/services/question.service';
import { ResponseService } from 'src/app/services/response.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 
  users: any;

  constructor(private userService:UserService, private question:EnquetteService, private enq:EnquetteService) { }

  ngOnInit(): void {
    this.getUsers()
    
  }
   
  getUsers() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
       
      

    });  }
  
      
}
