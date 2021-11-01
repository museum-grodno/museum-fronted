import { Injectable } from '@angular/core';
import {NetworkService} from '../services/network.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // tslint:disable-next-line:ban-types

  constructor( private network: NetworkService) {}
/*
{
  user_id: 'admin',
  password: '11111111'
}
*/

  // tslint:disable-next-line:typedef
  login(authInfo){
     return this.network.sendPost('login', authInfo);
  }

  validate(){
    return this.network.sendPost('validate',null);
  }

}
