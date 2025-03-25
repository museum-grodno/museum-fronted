import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  public translate;
  constructor(
    private translateService: TranslateService
  ) {
    this.translate = translateService;
  }
  ngOnInit(): void {
  }

}
