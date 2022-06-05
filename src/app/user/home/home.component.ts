import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquetteService } from 'src/app/services/enquette.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
enquettes : any ;
  constructor(private service : EnquetteService  , private router : Router) { }

  ngOnInit(): void {
    this.getallenquettes()
  }

  getallenquettes(){
      this.service.getall().subscribe({
        next:(res)=>{
          this.enquettes = res
          } , 
          error: (err)=> console.error(err)
      })
  }

  goto(id: number){
    
      this.router.navigate(['/user/enquettes/'+id])
  }

}
