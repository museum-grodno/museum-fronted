import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import {ApiInterceptors} from "../services/api.interceptors";

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    {provide : API_BASE_URL, useValue: 'http://127.0.0.1/api/'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptors,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
