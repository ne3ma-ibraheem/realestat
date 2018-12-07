import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService, User} from './api.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static key = 'token';

  currentUser: User;

  call: Observable<User>;

  $login = new EventEmitter<User>();

  constructor(api: ApiService) {
    if (localStorage.getItem(LoginService.key)) {
      const user: User = JSON.parse(atob(localStorage.getItem(LoginService.key)));
      this.call = api.one<User>('user', user.id).pipe(map(data => {
          if (data.isEnabled && data.username === user.username && data.password === user.password) {
            return data;
          } else {
            return null;
          }
        })
      );

      this.call.subscribe(data => data ? this.doLogin(data) : this.logout());
    }
  }

  doLogin(user: User) {
    localStorage.setItem(LoginService.key, btoa(JSON.stringify(user)));
    this.currentUser = user;
    this.$login.emit(user);
  }

  logout() {
    localStorage.removeItem(LoginService.key);
    this.currentUser = null;
    this.$login.emit(null);
  }

  checkLogin() {
    if (this.currentUser) {
      this.$login.emit(this.currentUser);
    }
  }

  getUser() {
    if (this.currentUser || !this.call) {
      return of(this.currentUser);
    } else {
      return this.call;
    }
  }
}
