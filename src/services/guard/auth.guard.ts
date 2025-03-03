import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionStorage, SessionStorageService} from 'ngx-webstorage';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken: string = this.SessionSt.retrieve('token');
    if (!!authToken){
      // @ts-ignore
     return this.auth.validate().toPromise()
       .then((isValidUser) => {
         if (isValidUser['token'] !== authToken['token']){
           this.SessionSt.store('token', isValidUser['token']);
         }
         return true;
       } )
       .catch((error) => {
         this.SessionSt.clear('token');
         this.router.navigate(['login']);
         return false;
       });

    } else {
      this.router.navigate(['login']);
      return false;
    }

  }
  constructor(private auth: AuthService,
              private SessionSt: SessionStorageService,
              private router: Router
  ) {
  }
}
