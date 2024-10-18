import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

let headers:any =new HttpHeaders()
 let token:any= localStorage.getItem('userToken')
 if(token && !request.url.includes('signup')){
 headers=request.headers.set('token', token)
 }
 let updateRequest= request.clone({
  headers})
    return next.handle(updateRequest);
  }
}
