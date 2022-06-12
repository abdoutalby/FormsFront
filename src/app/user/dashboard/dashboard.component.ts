import { Component, OnInit, ViewChild } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ResponseService } from 'src/app/services/response.service';

import { EnquetteService } from 'src/app/services/enquette.service';
import { QuestionService } from 'src/app/services/question.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  enquettes: any;
  questions = 0;

  

  constructor(
    private toaster: ToastrService,
    private auth: AuthService,
    private service: ResponseService,
    private questionService: QuestionService,
    private router: Router,
    private enquetteService: EnquetteService
  ) {}

  ngOnInit(): void {
    this.getAllEnqu();
  }

  async getAllEnqu(){
  await  this.enquetteService.getUserEnquettes(this.auth.user?.id).subscribe({
      next: (res) => {
        let sq =0;
        this.enquettes = res;
        this.radarChartData.datasets[0].data.push(this.enquettes.lenght)
        this.enquettes.forEach(async (e: any) => {
        await  this.enquetteService.getQuestions(e.id).subscribe({
            next: (res: any) => {
            
              console.log(res.length, 'questo' , this.questions)
             sq+=res.lenght
              console.error(sq)
            },
          });
        }); 
        this.radarChartData.datasets[0].data.push(this.questions)
        console.log(this.enquettes);
        console.log('question : '+this.questions , 'enquettese : '+this.enquettes.length)
      },
      error: (err) => {
        console.log(err.message);
      },
    });

  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'Enquettes', 'Questions', 'Reponses'] 
  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: [  ], label: 'Series A' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
