import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enquette } from '../models/enquette';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EnquetteService {
  api = 'http://localhost:8080/api/enquette/';

  constructor(private auth: AuthService, private http: HttpClient) {}

  getall() : Observable<Enquette[]>{
    return this.http.get<Enquette[]>(this.api, this.auth.getToken());
  }

  create(Data: any) {
    return this.http.post(this.api, Data, this.auth.getToken());
  }

  getById(id: number) {
    return this.http.get(this.api + id, this.auth.getToken());
  }

  addtheme(id: any , theme : any ){
    console.log(theme ,'from the sesrveref')
    return this.http.post(this.api+"addTheme/"+id ,theme, this.auth.getToken())
  }

  addQuestion(id: number, data: any) {
    return this.http.post(
      this.api + 'addQuestion/' + id,
      data,
      this.auth.getToken()
    );
  }

  getUserEnquettes(id: number) {
    return this.http.get(this.api + 'user/' + id, this.auth.getToken());
  }

  delete(id: number) {
    return this.http.delete(this.api + id, this.auth.getToken());
  }

  getQuestions(id: any) {
    return this.http.get(this.api + 'getQuestions/' + id, this.auth.getToken());
  }

  deleteQuestion(id: any , idq : any){
    return this.http.delete(this.api+id+'/question/'+idq , this.auth.getToken())
  }
}
