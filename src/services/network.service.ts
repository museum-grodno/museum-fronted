import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_BASE_URL} from "../app/app.module";


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http:HttpClient) { }

  sendPost(endpoint:string, body:any,options:any) {
    let url:string  = API_BASE_URL + endpoint;

    return this.http.post(url,body,options);
  }

}
