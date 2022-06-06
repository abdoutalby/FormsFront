import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr'; 
 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './components/register/register.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
 @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
     
    RegisterComponent,
    
    NotFoundComponent,
         QuestionEditComponent,
         DialogComponent,
         
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    NgbModule,
    FontAwesomeModule,
    NgbModule  ,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    

   ],
  
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
