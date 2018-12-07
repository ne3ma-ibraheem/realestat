import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from './login.service';
import {SidebarComponent} from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(SidebarComponent)
  sidebar: SidebarComponent;

  constructor(private loginService: LoginService) {
    loginService.$login.subscribe(user => {
      this.btnVisible = !!user;
    });
  }

  btnVisible = false;

  ngOnInit(): void {
    this.loginService.checkLogin();
  }

}
