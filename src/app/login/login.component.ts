import { AuthService } from '../../services/auth.service';
import {Component, Injectable, OnInit} from '@angular/core';
import { SessionStorage, SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userId = '';
  public pswd = '';

  constructor(
    private auth: AuthService,
    private SessionSt: SessionStorageService,
    private router: Router
  ) {
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
