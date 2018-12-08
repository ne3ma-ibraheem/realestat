import {Component, Input, OnInit} from '@angular/core';
import {ApiService, Option} from '../../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent implements OnInit {

  @Input() type: string;
  options: Option[] = [];
  newOption: Option = new Option();

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
        this.setType(params['type']);
      }
    );
  }

  ngOnInit() {
  }

  setType(type: string) {
    this.type = type;
    this.newOption.type = this.type;
    this.api.list<Option>('common', {
      filter: `type,eq,${type}`
    }).subscribe(opt => {
      this.options = opt;
    });
  }

  addNew() {
    this.api.create('common', this.newOption).subscribe(x => {
      this.newOption.id = x;
      this.options.push(this.newOption);
      this.newOption = new Option();
      this.newOption.type = this.type;
    });
  }

  update($index) {
    this.api.update('common', this.options[$index]).subscribe(x => {
      console.log(x);
    });
  }

  delete($index) {
    this.api.delete('common', this.options[$index].id).subscribe(x => {
      this.options.splice($index, 1);
    });
  }

}
