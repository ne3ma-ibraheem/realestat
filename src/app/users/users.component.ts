import {Component, OnInit} from '@angular/core';
import {ApiService, User} from '../api.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  type: string;
  options: User[] = [];

  newOption: User = new User();

  constructor(private api: ApiService) {
    this.api.list<User>('user').subscribe(opt => {
      this.options = opt;
    });

  }


  addNew() {

    console.log(this.newOption);
    this.api.create('user', this.newOption).subscribe(x => {
      this.newOption.id = x;
      this.options.push(this.newOption);
      this.newOption = new User();
    });
  }

  update($index) {
    this.api.update('user', this.options[$index]).subscribe(x => {
      console.log(x);
    });
  }

  delete($index) {
    this.api.delete('user', this.options[$index].id).subscribe(x => {
      this.options.splice($index, 1);
    });
  }

  ngOnInit(): void {
  }
}
