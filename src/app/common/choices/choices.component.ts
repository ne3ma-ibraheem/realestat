import {Component, OnInit} from '@angular/core';
import {ApiService, Option} from '../../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss']
})
export class ChoicesComponent implements OnInit {

  type: string;
  options: Option[] = [];

  newOption: Option = new Option();

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
        this.type = params['type'];
        this.newOption.type = this.type;
        this.api.types(this.type).subscribe(opt => {
          this.options = opt;
        });
      }
    );
  }

  ngOnInit() {
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
