import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EnquettesComponent } from './enquettes/enquettes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquetteComponent } from './enquette/enquette.component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
 

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AddEnqUserComponent } from './add-enq-user/add-enq-user.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ReponseComponent } from './reponse/reponse.component';
import { QuestionResponsesComponent } from './question-responses/question-responses.component';
import { EnquettesPipe } from '../pipes/enquettes.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { MatNativeDateModule } from '@angular/material/core';
 import { NgChartsModule } from 'ng2-charts';
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
    ReponseComponent,
    QuestionResponsesComponent,
    EnquettesPipe,
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
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule,
    NgChartsModule   ],
})
export class UserModule {}
