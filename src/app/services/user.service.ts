import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API = 'http://localhost:8080/api/user/';

  constructor(private http: HttpClient , private auth: AuthService) {}

  public getAllUsers(  ) {
      
    
    return this.http.get(this.API+'users', this.auth.getToken());
  }


  public getAllAdmins() {
      
    
    return this.http.get(this.API+'admins', this.auth.getToken());
  }

 public updateStatus(id:number  ){
  return this.http.put(this.API+id, {} ,  this.auth.getToken())
  }

  public deleteUser(id: any) {
    return this.http.delete(this.API + id , this.auth.getToken());
  }

  public getById(id: any) {
    return this.http.get(this.API + id , this.auth.getToken());
  }
  public count() {
    return this.http.get(this.API + 'count' , this.auth.getToken());
  }

  public findWithULike(username: string) {
    return this.http.get(this.API + 'find/' + username  , this.auth.getToken());
  }

  
}
