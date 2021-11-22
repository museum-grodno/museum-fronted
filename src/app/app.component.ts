import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'museum-fronted';

  selectedLanguage: string;
  languages: {id: string, title: string}[] = [];

  constructor(public translate: TranslateService) {
    translate.addLangs(environment.locales);
    translate.setDefaultLang(environment.defaultLocale);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/be|ru|en/) ? browserLang : 'be');
  }

}
