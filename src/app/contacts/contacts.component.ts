import {Component, OnInit} from '@angular/core';
import {ApiService, Client, Option} from '../api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  type: string;
  options: Client[] = [];

  newOption: Client = new Client();

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
        this.type = params['type'];
        this.newOption.clientType = this.type;
        this.api.contacts(this.type).subscribe(opt => {
          this.options = opt;
        });
      }
    );
  }

  ngOnInit() {
  }

  addNew() {

    this.api.create('client', this.newOption).subscribe(x => {
      this.newOption.id = x;
      this.options.push(this.newOption);
      this.newOption = new Client();
      this.newOption.clientType = this.type;
    });
  }

  update($index) {
    this.api.update('client', this.options[$index]).subscribe(x => {
      console.log(x);
    });
  }

  delete($index) {
    this.api.delete('client', this.options[$index].id).subscribe(x => {
      this.options.splice($index, 1);
    });
  }

}
