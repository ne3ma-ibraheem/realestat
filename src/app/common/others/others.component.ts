import {Component, OnInit, ViewChild} from '@angular/core';
import {SidebarComponent} from '../../sidebar/sidebar.component';
import {ChoicesComponent} from '../choices/choices.component';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  otherTypes = [
    'Ownership Status',
    'Outdoor Finishing Level',
    'Indoor Finishing Level',
    'Heating',
    'Cooling',
    'Direction'
  ];

  selectedType = this.otherTypes[0];

  @ViewChild(ChoicesComponent)
  choices: ChoicesComponent;

  constructor() {
  }

  ngOnInit() {
    this.setType(this.selectedType);
  }

  setType(type) {
    this.selectedType = type;
    this.choices.setType(type);
  }

}
