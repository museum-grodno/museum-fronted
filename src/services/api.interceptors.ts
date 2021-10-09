import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @ts-ignore
import { Observable } from "rxjs";

@Injectable()

export class ApiInterceptors implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      let request = req.clone();
      request.params.append('Accept','application/json');

      /*console.log(req);
      console.log(next);
*/
      return next.handle(request);
    }
}

