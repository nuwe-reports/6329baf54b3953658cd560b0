import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  message: string | undefined;

  constructor(
    private http: HttpClient
  ) { }

  signup(data: any): any {
    const url = URL_SERVICES + 'signup';

    return this.http.post(url, data)
    .pipe(
      map((resp: any) => {
        return this.message = resp.message;
      }),
      catchError((err: any) => {      
        return throwError(err);
      })
    )
  }
}
