import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  options: Observable<Option[]>;

  constructor(private http: HttpClient) {

  }

  types(type): Observable<Option[]> {
    return this.http.get<Records<Option>>(`/api.php/records/common`)
      .pipe(map(data => data.records.filter(option => option.type === type)));
  }

  contacts(type): Observable<Client[]> {
    return this.http.get<Records<Client>>(`/api.php/records/client`)
      .pipe(map(data => data.records.filter(option => option.clientType === type)));
  }

  users(): Observable<User[]> {
    return this.http.get<Records<User>>(`/api.php/records/user`)
      .pipe(map(data => data.records));
  }

  create<T>(tableName: string, value: T): Observable<number> {
    return this.http.post<number>(`/api.php/records/${tableName}`, value);
  }

  update<T>(tableName: string, value: T): Observable<number> {
    return this.http.put<number>(`/api.php/records/${tableName}/${value['id']}`, value);
  }

  delete<T>(tableName: string, id: number): Observable<number> {
    return this.http.delete<number>(`/api.php/records/${tableName}/${id}`);
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

export class Client {
  id: number;
  clientType: string;
  mobile: string;
  name: string;
  note: string;
  otherPhone: string;
}

export class User {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
  isEnabled: boolean;
}

