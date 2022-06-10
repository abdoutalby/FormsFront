import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reponse } from '../models/reponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  api = 'http://localhost:8080/api/response/'

  constructor(private http : HttpClient  , private auth : AuthService) { }


  getAllByEnq():Observable<Response[]>{
    return this.http.get<Response[]>(this.api , this.auth.getToken())
  }

  getById(id : any){
    return this.http.get(this.api+id , this.auth.getToken())
  }
  getRepById(id:any):Observable<Reponse>{
    return this.http.get<Reponse>(`${this.api}reponse/${id}`, this.auth.getToken());
  }

  getByQuestion(id : any ){
    return this.http.get(this.api+'question/'+id , this.auth.getToken())
  }

}
