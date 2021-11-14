import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {TranslateModule} from '@ngx-translate/core';



import { LoginComponent } from './login/login.component';
import {ApiInterceptors} from '../services/api.interceptors';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(),
    NgxWebstorageModule.forRoot(
      {
        prefix: 'museum',
        separator: '.',
        caseSensitive: true
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptors,
      multi : true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    DashboardComponent,
    TranslateModule
  ]
})
export class AppModule { }
