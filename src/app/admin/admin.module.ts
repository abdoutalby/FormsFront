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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquetteComponent } from './enquette/enquette.component';
import { QuestionEditComponent } from './question-edit/question-edit.component';
import { AddEnquetteComponent } from '../components/add-enquette/add-enquette.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { QuestionViewComponent } from './question-view/question-view.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

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
    QuestionViewComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    MatIconModule,
    MatFormFieldModule,
  ],
})
export class AdminModule {}
