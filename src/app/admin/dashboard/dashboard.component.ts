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
  
  a: number = 0;
  users!: User[];

  constructor(private userService:UserService, private question:EnquetteService, private enq:EnquetteService) { }

  ngOnInit(): void {
    this.getUsers()
    this.getQuestion()
    this.getEnq()
  }
  getEnq() {
    throw new Error('Method not implemented.');
  }
  getQuestion() {
  
  }
  getUsers() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      //this.users = data;
      this.a = this.users.length;
      console.log(this.a);
      

    });  }
  
      
}
