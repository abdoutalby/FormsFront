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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
 

  ],
})
export class AdminModule {}
