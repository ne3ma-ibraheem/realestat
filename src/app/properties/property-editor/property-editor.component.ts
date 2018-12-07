import {Component, Input, OnInit} from '@angular/core';
import {ApiService, Option, Property} from '../../api.service';

@Component({
  selector: 'app-property-editor',
  templateUrl: './property-editor.component.html',
  styleUrls: ['./property-editor.component.scss']
})
export class PropertyEditorComponent implements OnInit {

  @Input() property: Property;

  propertyTypes: Option[];

  provinceList: Option[];
  citiesList: Option[];
  districtList: Option[];

  interiorFeatures = [
    {name: 'furniture', label: 'Furniture'},
    {name: 'electricalAppliances', label: 'Electrical Appliances'},
    {name: 'lifts', label: 'Lifts'},
  ];

  exteriorFeatures1 = [
    {name: 'Watchman', label: 'Watchman'},
    {name: 'SecurityMan', label: 'Security Man'},
    {name: 'SecurityCameras', label: 'Security Cameras'},
    {name: 'Intercom', label: 'Intercom'},
    {name: 'CentralDish', label: 'Central Dish'},
    {name: 'BldgGarden', label: 'Bldg Garden'},
  ];
  exteriorFeatures2 = [
    {name: 'Playground', label: 'Playground'},
    {name: 'BldgMultipurpose Hall', label: 'Bldg Multipurpose Hall'},
    {name: 'Gym', label: 'Gym'},
    {name: 'SwimmingPool', label: 'Swimming Pool'},
    {name: 'StorageRoom', label: 'Storage Room'},
    {name: 'Generator', label: 'Generator'},
  ];

  types = {
    'Property Type': [],
    'Province': [],
    'Cities': [],
    'Districts': [],
    'Ownership Status': [],
    'Outdoor Finishing Level': [],
    'Indoor Finishing Level': [],
    'Heating': [],
    'Cooling': [],
    'Direction': [],
  };


  constructor(api: ApiService) {
    Object.keys(this.types).forEach(type => {
      api.list<Option>('common', {
        filter: `type,eq,${type}`
      }).subscribe(data => this.types[type] = data);
    });
  }

  ngOnInit() {
    if (!this.property) {
      this.property = new Property();
    }
  }


}
