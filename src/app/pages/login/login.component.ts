import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../login.service';
import {ApiService, User} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: '';
  password: '';

  error = false;

  constructor(private login: LoginService, private api: ApiService, private router: Router) {

  }

  ngOnInit() {
    this.login.getUser().subscribe(data => {
      if (data) {
        this.router.navigate(['users']);
      }
    });
  }

  loginCall() {
    this.api.list<User>('user', {
      filter: [
        `username,eq,${this.username}`,
        `password,eq,${this.password}`
      ]
    }).subscribe(data => {
        if (data.length > 0 && data[0].isEnabled) {
          this.login.doLogin(data[0]);
          this.router.navigate(['users']);
        } else {
          this.error = true;
        }
      }
    );
  }

}
