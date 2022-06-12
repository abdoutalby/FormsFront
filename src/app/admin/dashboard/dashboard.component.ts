import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { EnquetteService } from 'src/app/services/enquette.service';
import { QuestionService } from 'src/app/services/question.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ResponseService } from 'src/app/services/response.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: any;
  reclams : any ;
  enquettes : any ;

  constructor(
    private userService: UserService,
    private question: EnquetteService,
    private enq: EnquetteService,
    private reclamService : ReclamationService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getAllRec()
    this.getAllEnquettes()
  }

  getAllEnquettes(){
    this.enq.getall().subscribe({
      next:(res)=>{
        this.enquettes = res 
      }, 
      error:(err)=>{

      }
    })
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }

  getAllRec() {
    this.reclamService.getAll().subscribe({
      next:(res)=>{
        this.reclams = res ;
      }, 
      error:(err)=>{
        
      }
    })
  }
}
