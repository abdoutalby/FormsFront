import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.scss']
})
export class ReclamationsComponent implements OnInit {

  reclams : any ;
  constructor(private  service : ReclamationService , private toaster : ToastrService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next : (res : any)=> this.reclams = res ,
      error: (err : any)=> this.toaster.error(err)
    })
  }

}
