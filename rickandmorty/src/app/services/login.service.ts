import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  message: string | undefined;

  constructor(
    private http: HttpClient
  ) { }

  // inicio de sesion
  login(user: any): any {
    const url = URL_SERVICES + 'login';

    return this.http.post(url, user)
    .pipe(
      map((resp: any) => {
        this.setUserStorage(resp.user, resp.token);
        return;   
      }),
      catchError((err: HttpErrorResponse) => {
        //console.log(err.error);
        
        return throwError(() => new Error(err.error.message));
      })
    )
  }

  // guardar datos de sesion en localStorage
  setUserStorage(user: string, token: string) {
    localStorage.setItem('user', user);
    localStorage.setItem('token', token);
  }

  // Comprueba si el usuario ha hecho login
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return (token && token.length > 5) ? true : false
  }

  // logout
  logout() {
    localStorage.clear();
  }

}
