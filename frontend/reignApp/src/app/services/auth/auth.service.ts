import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// RxJs
import { throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor( public activatedRoute: ActivatedRoute,
               public router: Router,
               private http: HttpClient
  ) { }

  ngOnInit() {

  }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse.error.message);
    }
    return throwError('there is a problem with the service. We are working to solve that..thx U');
  }

  /**
   * login
   */
  public login( email: string , password: string ) {
    return this.http.post<any>(`${environment.url}login?variable=email&dato=${email}&password=${password}`, {}, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }
}
