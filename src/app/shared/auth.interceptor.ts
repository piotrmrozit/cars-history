import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Intercept1', req);
        const copyReq = req.clone({params: req.params.set('token', this.authService.getToken())})
        // console.log('Intercept2', copyReq);
        return next.handle(copyReq);
    }
}