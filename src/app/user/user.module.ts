import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import { EnquettesComponent } from './enquettes/enquettes.component'
import { FormsModule } from '@angular/forms';
import { EnquetteComponent } from './enquette/enquette.component'; 
import { QuestionViewComponent } from './question-view/question-view.component';
import { AddEnquetteComponent } from '../components/add-enquette/add-enquette.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    
    UserComponent,
    DashboardComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    EnquettesComponent,
    EnquetteComponent,
    QuestionViewComponent,
    
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
  ,  
})
export class UserModule { }
