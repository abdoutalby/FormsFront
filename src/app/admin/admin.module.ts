import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { EnquettesComponent } from './enquettes/enquettes.component';
import { QuestionsComponent } from './questions/questions.component';
import { ResponsesComponent } from './responses/responses.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EnquetteComponent } from './enquette/enquette.component';
import { QuestionEditComponent } from './question-edit/question-edit.component'; 
import { AddEnquetteComponent } from '../components/add-enquette/add-enquette.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { QuestionViewComponent } from './question-view/question-view.component';

@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    HeaderComponent,
    UsersComponent,
    AdminsComponent,
    EnquettesComponent,
    QuestionsComponent,
    ResponsesComponent,
    ReclamationsComponent,
    DashboardComponent,
    EnquetteComponent,
    QuestionEditComponent,
    AddEnquetteComponent,
QuestionViewComponent  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, MatInputModule , 
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
 

  ],
})
export class AdminModule {}
