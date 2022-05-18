import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  public baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = window['__env']['apiUrl'];
  }

  // tslint:disable-next-line:typedef
  sendPost(endPoint: string, body: any ){
    return this.http.post(
        this.baseUrl + endPoint,
        body
      );
  }

  // tslint:disable-next-line:typedef
  sendPut(endPoint: string, body: any ){
    return this.http.put(
      this.baseUrl + endPoint,
      body
    );
  }
}
