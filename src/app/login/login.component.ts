import { AuthService } from '../../services/auth.service';
import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userId = '';
  public pswd = '';

  constructor(private auth: AuthService) {
  }

  login(){

    const authInfo = {
      user_id: this.userId,
      password: this.pswd
    };

    this.auth.login(authInfo);
  }

  ngOnInit(): void {
  }

}
