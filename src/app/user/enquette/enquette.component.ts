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
    console.log('repondre au question ' + q + ' avec' + reponse);
    const res = {
        user : this.auth.user,
        question : q,
        reponse : reponse
    }
    console.log('response to send ' , res)
    this.reponseService.repondre(q.id,res).subscribe({
      next: (res) => {this.taoster.success('done ')},
      error: (err) => {this.taoster.error(err.message)},
    });
  }
  getEnquette() {
    this.service.getById(this.id).subscribe({
      next: (res) => (this.enquette = res),
      error: (err) => console.error(err),
    });
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
