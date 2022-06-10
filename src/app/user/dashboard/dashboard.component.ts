import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reponse } from 'src/app/models/reponse';
import { AuthService } from 'src/app/services/auth.service';
import { ResponseService } from 'src/app/services/response.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ELEMENT_DATA: Response[] = []
  FILTERED_DATA: Response[] = []
  dataSource = new MatTableDataSource<Response>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['reponse','Demandeur',"question"];
  rep:Reponse = {
    id:'',
    question :'',
    reponse:'',
    user:''

   }
  constructor(private toaster : ToastrService ,
    private auth : AuthService,
    private service : ResponseService , 
     private router : Router) { }

  ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.service.getAllByEnq().subscribe(response => {
    this.ELEMENT_DATA = response;
    this.dataSource = new MatTableDataSource<Response>(response);
    this.dataSource.paginator = this.paginator;
    console.log(response);
    
    })
  }


}
