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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquetteComponent } from './enquette/enquette.component'; 
import { QuestionViewComponent } from './question-view/question-view.component';
import { AddEnquetteComponent } from '../components/add-enquette/add-enquette.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AddEnqUserComponent } from './add-enq-user/add-enq-user.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';

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
    AddEnqUserComponent,
    AddReclamationComponent,
    
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule, 
    MatFormFieldModule,
   MatPaginatorModule,
   MatCheckboxModule,
   MatButtonModule,
   MatSelectModule,
   MatInputModule,
   MatTableModule,
   MatIconModule,
   MatListModule,
   MatCardModule,
   MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule


  ]
  ,  
})
export class UserModule { }
