import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() open: boolean;

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

  constructor() {
  }

  ngOnInit() {
  }

}
