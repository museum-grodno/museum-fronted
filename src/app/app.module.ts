import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {provideNgxWebstorage, withNgxWebstorageConfig, withLocalStorage, withSessionStorage} from 'ngx-webstorage';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


import { LoginComponent } from './login/login.component';
import {ApiInterceptors} from '../services/api.interceptors';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DictionaresComponent } from './dictionares/dictionares.component';
import {BookingExcursionsComponent} from './booking-excursions/booking-excursions.component';


// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        DictionaresComponent,
        BookingExcursionsComponent
    ],
    bootstrap: [AppComponent],
    exports: [
        DashboardComponent,
        BookingExcursionsComponent
    ], imports: [BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterOutlet,
    FontAwesomeModule,
    FormsModule,
    ModalModule,
    FullCalendarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), ReactiveFormsModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptors,
            multi: true
        },
        BsModalService,
        provideHttpClient(withInterceptorsFromDi()),
        provideNgxWebstorage(withNgxWebstorageConfig({ separator: ':', caseSensitive: true }),
        withLocalStorage(), withSessionStorage())
       /* provideNgxWebstorage(withNgxWebstorageConfig(
          {
                  prefix: 'museum',
                  separator: '.',
                  caseSensitive: true
                }
        ))*/

    ] })
export class AppModule { }
