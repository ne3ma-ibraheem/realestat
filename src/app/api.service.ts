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
    return this.list('user');
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

  list<T>(tableName: string, params = {}): Observable<T[]> {
    return this.http.get<Records<T>>(`/api.php/records/${tableName}`,
      {params: params}
    ).pipe(map(data => data.records));
  }

  one<T>(tableName: string, id: number): Observable<T> {
    return this.http.get<T>(`/api.php/records/${tableName}/${id}`);
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

export class Property {
  id?: number;
  entryDate: string;
  owner?: string;
  propertyType?: number;
  province?: number;
  city?: number;
  district?: number;
  floor?: number;
  masterBedrooms?: number;
  bedrooms?: number;
  bathrooms?: number;
  guestBathrooms?: number;
  maidroom?: number;
  indoorFinishingLevel?: number;
  direction?: number;
  heating?: number;
  cooling?: number;
  outdoorFinishingLevel?: number;
  parking?: number;
  ownershipStatus?: number;
  registrationDistrict?: string;
  registrationNo?: string;
  noteLocationInformation?: string;
  address?: string;
  noteInteriorfeatures?: string;
  noteExteriorfeatures?: string;
  additionalInformationNote?: string;
  propertyInhouseInfo?: string;
  yearBuilt?: string;
  lat?: string;
  lon?: string;
  area?: string;
  terrace?: string;
  privateGarden?: string;
  outdoorAreaFactor?: string;
  equivalentArea?: string;
  propertyConditionFactor?: string;
  furniture?: boolean;
  electricalAppliances?: boolean;
  lifts?: boolean;
  watchman?: boolean;
  securityMan?: boolean;
  securityCameras?: boolean;
  intercom?: boolean;
  centralDish?: boolean;
  bldgGarden?: boolean;
  playground?: boolean;
  bldgMultipurpose?: boolean;
  gym?: boolean;
  swimmingPool?: boolean;
  storageRoom?: boolean;
  generator?: boolean;
  photos?: string;
  plans?: string;
  walkin?: string;

}
