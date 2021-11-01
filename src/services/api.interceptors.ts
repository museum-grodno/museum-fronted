import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorage, SessionStorageService} from 'ngx-webstorage';

// @ts-ignore
import { Observable } from 'rxjs';

@Injectable()

export class ApiInterceptors implements HttpInterceptor{
  constructor( private SessionSt: SessionStorageService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let request: any;
      const t = this.SessionSt.retrieve('token');

      if ((!!t) && ((req.url.split('/').pop() !== 'login')) ){
        request = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
              .set('Authorization', 'Bearer ' + t.token)});
       }else{
        request = req.clone({
          headers: req.headers.set('Content-Type', 'application/json')
            });
      }

      return next.handle(request);
    }
}

