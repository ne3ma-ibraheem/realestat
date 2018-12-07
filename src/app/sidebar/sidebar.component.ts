import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  open = false;

  tools = [
    'Property Type',
    'Province',
    'Cities',
    'Districts',
    'Listing Type',
    'Exchange Rate'
  ];

  contacts = [
    'Clients',
    'Panorama Agent',
    'Panorama Broker',
    'Other Agent',
    'Other Broker',
  ];

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  toggle() {
    this.open = !this.open;
  }

}
