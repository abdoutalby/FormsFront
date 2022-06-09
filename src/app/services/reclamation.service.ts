import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  
 
  api = 'http://localhost:8080/api/reclamation/'
  constructor(private auth : AuthService, private http: HttpClient) { } 
  
  
  reclamer(rec:any) {
    return this.http.post(this.api, rec,this.auth.getToken())
  }
  
  getAll() {
    
    return this.http.get(this.api , this.auth.getToken())
  }
}
