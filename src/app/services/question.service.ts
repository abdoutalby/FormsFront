import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  api = 'http://localhost:8080/api/question/'
  constructor(private http : HttpClient , private auth : AuthService) { }
    delete(id: any) {
      return this.http.delete(this.api+id , this.auth.getToken());
    }
  changeStatus(id: any) {
   return this.http.put(this.api+id ,{} , this.auth.getToken())
  }}
