import {

    HttpEvent,

    HttpInterceptor,

    HttpHandler,

    HttpRequest,

    HttpResponse,

    HttpErrorResponse

   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

   import { Observable, throwError } from 'rxjs';

   import { retry, catchError } from 'rxjs/operators';

   @Injectable({
    providedIn: 'root'
  })
   export class HttpErrorInterceptor implements HttpInterceptor {


  constructor(
    private router       : Router
  ){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(request)

        .pipe(

          retry(0),

          catchError((error: HttpErrorResponse) => {

            console.log(error,'error happened') 
            if(error['status'] == 401){
                this.router.navigate(['/auth/login'])
            }
            return throwError('errorMessage'+error);

          })

        )

    }

   }
