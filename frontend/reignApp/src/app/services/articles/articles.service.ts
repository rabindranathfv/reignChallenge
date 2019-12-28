import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

// services
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {


  constructor( public activatedRoute: ActivatedRoute,
               public router: Router,
               private http: HttpClient,
               private sessionService: SessionService
  ) { }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return throwError('there is a problem with the service. We are working to solve that..thx U');
  }

  /**
   * getUsers
   */
  public getArticles( resource = 'articles' ) {
    console.log(`${environment.url}${resource}`);
    return this.http.get(`${environment.url}${resource}`)
               .pipe(catchError(this.handleError));
  }

  /**
   * getUserByResourceId
   */
  public getArticlesById( id: number): Observable<any> {
    console.log(`${environment.url}${id}`);
    return this.http.get(`${environment.url}${id}`)
               .pipe(catchError(this.handleError));
  }

  public deleteArticle( id: number): Observable<any> {
    console.log(`${environment.url}${id}`);
    return this.http.delete(`${environment.url}${id}`)
          .pipe(catchError(this.handleError));
  }

}
