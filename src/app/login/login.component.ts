import { AuthService } from '../../services/auth.service';
import {Component, Injectable, OnInit} from '@angular/core';
import { SessionStorage, SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {

  public userId = '';
  public pswd = '';
  public translate;

  constructor(
    private auth: AuthService,
    private SessionSt: SessionStorageService,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.translate = translateService;
  }

  login(){

    const authInfo = {
      user_id: this.userId,
      password: this.pswd
    };

    this.auth.login(authInfo).subscribe(
      (data) => {
        this.SessionSt.store('token', data);
        this.router.navigate(['']);
      },
      (data) => {
        console.log(data);
      },
    );
  }

  ngOnInit(): void {
  }

}
