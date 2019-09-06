import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterseptor implements HttpInterceptor{

constructor(private auth: AdminService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (this.auth.isAuth()){
        req = req.clone({
          setHeaders:{
            Authorization: this.auth.getToken()
          }
        })
    }
    return next.handle(req).pipe(
      catchError(
        (error: HttpErrorResponse) => this.handlerAuthError(error)
        )
    )
    
  }
  
  private handlerAuthError(error: HttpErrorResponse): Observable<any>{
    if(error.status === 401){
      this.router.navigate(['/admin'],{
        queryParams:{
          sessionFailed: true
        }
      })
    }
    return throwError(error)
  }
}
