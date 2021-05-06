import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erroMessage:string;
  username: string;
  password: string;

  constructor(private _auth: AuthenticationService, private _router: Router) {
    if (this._auth.loggedIn) {
      this._router.navigate(['login']);
    }
  }

  ngOnInit(): void {
  }
  login(): void {
    if (this.username !== '' && this.password !== '') {
      if (this._auth.login(this.username, this.password)) {
        this._router.navigate(["dashboash"]);
      }
      else  {
        this.erroMessage = "Wrong username or password";
      }
    }
  }
}
