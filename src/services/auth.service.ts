import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from "../app/app.module";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(){
    console.log('Test login');
  }

}
