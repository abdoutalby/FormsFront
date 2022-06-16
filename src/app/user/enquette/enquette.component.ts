import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { EnquetteService } from 'src/app/services/enquette.service';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-enquette',
  templateUrl: './enquette.component.html',
  styleUrls: ['./enquette.component.scss'],
})
export class EnquetteComponent implements OnInit {
  id: any;
  questions: any;
  enquette: any;
  
  themes =[
    {
      color : "black",
      selected : "false"
    } ,
    {
      color : "white",
      selected : "false"
    } , {
      color : "gray",
      selected : "false"
    } , {
      color : "green",
      selected : "true"
    } , {
      color : "blue",
      selected : "false"
    } 
  ]
  selectedTheme : any;
  constructor(
    private route: ActivatedRoute,
    private service: EnquetteService,
    private reponseService : ResponseService,
    private auth : AuthService,
    private taoster : ToastrService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
       this.getEnquette();
    this.getQuestions();   
  }

  repondre(q: any, reponse: any) {
     const res = {
        user : this.auth.user,
        question : q,
        reponse : reponse
    }
     this.reponseService.repondre(q.id,res).subscribe({
      next: (res) => {this.taoster.success('done ')},
      error: (err) => {this.taoster.error(err.message)},
    });
  }
  async getEnquette() {
   await this.service.getById(this.id).subscribe({
      next: (res) => {
        
        this.enquette = res
        console.log(this.enquette)
       
      },
      error: (err) => console.error(err),
    });
  }

  changeTheme(){
     this.themes= this.themes.filter(t=>t.color===this.selectedTheme)
 
    this.service.addtheme(this.enquette.id, this.themes[0]).subscribe({
      next : (res )=>{
        console.log(res)
        this.getEnquette()
      },
      error :(err)   =>{
        console.log(err)
      }
    })
  }

  getQuestions() {
    this.service.getQuestions(this.id).subscribe({
      next: (res) => {
        this.questions = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
