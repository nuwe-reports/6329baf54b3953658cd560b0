import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URL_SERVICES } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacters(page: string): any{
        
    const url = URL_SERVICES + 'characters';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page)
    return this.http.get(url, {params: queryParams})
        .pipe(
          map((resp:any) => {
            return resp.results;
        }),
        catchError((err: any) => {
          return throwError(() => new Error(err));
        })
    );
  }

  getSelectedCharacter(id: string): any {
    const url = URL_SERVICES + 'characters/' + id;
    return this.http.get(url)
        .pipe(
          map((resp: any) => {
            return resp.results;
          }),
          catchError((err: any) => {
            return throwError(() => new Error(err));
          })
        )
  }
}
