import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user!: any;

  constructor(private http: HttpClient) {}

  public login(login: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signin', login);
  }

  public register(data: any) {
    return this.http.post('http://localhost:8080/api/auth/signup', data);
  }

  public isLoggedAdmin() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    if (token) {
      const decodedToken = helper.decodeToken(token);

      let roles = decodedToken.roles;
      roles = roles.replace('[', '');
      roles = roles.replace(']', '');
      roles = roles.split(', ');

      for (let i = 0; i < roles.length; i++) {
        if (roles[i] == 'ROLE_ADMIN') {
          return true;
        }
      }
    }

    return false;
  }
  public isActive() {
    let token = localStorage.getItem('token');
    const helper = new JwtHelperService();
    if (token) {
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken, 'token decoded ');
      return decodedToken.status;
    }
    return false;
  }

  public getToken() {
    let token = localStorage.getItem('token');
    const tt = `Bearer ${token}`;
    var headers_object = new HttpHeaders().set('Authorization', tt);

    const httpOptions = {
      headers: headers_object,
    };
    return httpOptions;
  }

  public lougout() {
    localStorage.removeItem('token');
  }

  public LoggedInUser(): any {
    let user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
      console.log(this.user);
      return this.user;
    }
    return false;
  }
}
