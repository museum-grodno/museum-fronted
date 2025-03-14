import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import {provideNgxWebstorage, withNgxWebstorageConfig, withLocalStorage, withSessionStorage} from 'ngx-webstorage';



import { LoginComponent } from './login/login.component';
import {ApiInterceptors} from '../services/api.interceptors';
import { DashboardComponent } from './dashboard/dashboard.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { DictionaresComponent } from './dictionares/dictionares.component';

// AoT requires an exported function for factories
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({ declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        DictionaresComponent
    ],
    bootstrap: [AppComponent],
    exports: [
        DashboardComponent
    ], imports: [BrowserModule,
        AppRoutingModule,
        NgbModule,
        RouterOutlet,
        FontAwesomeModule,
        FormsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptors,
            multi: true
        },
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
