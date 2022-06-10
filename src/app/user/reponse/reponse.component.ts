import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reponse } from 'src/app/models/reponse';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {

  rep:Reponse = {
    id:'',
    question :'',
    reponse:'',
    user:''

   }
  constructor( private toastService: ToastrService,
    private route: ActivatedRoute,private service : ResponseService) { }

  ngOnInit(): void {
    this.findById();
  }
  findById() {
    this.service.getById(this.rep.id).subscribe(
      (data) => {
        this.rep = data
            },
      (ex) => {
        this.toastService.error(ex.error.error);
      }
    );  }

}
