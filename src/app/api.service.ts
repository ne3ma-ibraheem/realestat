import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options: Option[];

  constructor(private http: HttpClient) {
    http.get<Records<Option>>(`/api.php/records/COMMON`).subscribe(
      data => {
        this.options = data.records;
      }
    );
  }

  types(type): Option[] {
    return this.options && this.options.filter(data => data.type === type);
  }

  properties(): Observable<any> {
    return this.http.get<Records<any>>(`/api.php/records/Properties`).pipe(map(data => data.records));
  }

  listings(): Observable<any> {
    return this.http.get<Records<any>>(`/api.php/records/Listings`).pipe(map(data => data.records));
  }

}

export class Table {
  columns: string[];
  records: any[];
}

export class Option {
  id: number;
  type: string;
  p_value: string;
  parent_id: number;
}

export class Records<T> {
  records: T[];
}

