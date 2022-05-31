import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr'; 
 

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegisterComponent } from './components/register/register.component';
 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuestionEditComponent } from './components/question-edit/question-edit.component';
import { DialogComponent } from './components/dialog/dialog.component';
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
    NgbModule  
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule {}
