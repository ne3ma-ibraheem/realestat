import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {isBoolean} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private handleBoolean(value) {
    Object.keys(value).forEach(key => {
      if (isBoolean(value[key]) && !value[key]) {
        value[key] = null;
      }
    });
  }

  create<T>(tableName: string, value: T): Observable<number> {
    this.handleBoolean(value);
    return this.http.post<number>(`/api.php/records/${tableName}`, value);
  }

  update<T>(tableName: string, value: T): Observable<number> {
    this.handleBoolean(value);
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
  EntryDate: string;
  Owner?: string;
  PropertyType?: number;
  Province?: number;
  City?: number;
  District?: number;
  Floor?: number;
  MasterBedrooms?: number;
  Bedrooms?: number;
  Bathrooms?: number;
  GuestBathrooms?: number;
  Maidroom?: number;
  IndoorFinishingLevel?: number;
  Direction?: number;
  Heating?: number;
  Cooling?: number;
  OutdoorFinishingLevel?: number;
  Parking?: number;
  OwnershipStatus?: number;
  RegistrationDistrict?: string;
  RegistrationNo?: string;
  NoteLocationInformation?: string;
  Address?: string;
  NoteInteriorFeatures?: string;
  NoteExteriorFeatures?: string;
  AdditionalInformationNote?: string;
  PropertyInHouseInfo?: string;
  YearBuilt?: string;
  lat?: string;
  lon?: string;
  Area?: string;
  Terrace?: string;
  PrivateGarden?: string;
  OutdoorAreaFactor?: string;
  EquivalentArea?: string;
  PropertyConditionFactor?: string;
  Furniture?: boolean;
  ElectricalAppliances?: boolean;
  Lifts?: boolean;
  Watchman?: boolean;
  SecurityMan?: boolean;
  SecurityCameras?: boolean;
  Intercom?: boolean;
  CentralDish?: boolean;
  BldgGarden?: boolean;
  Playground?: boolean;
  BldgMultipurpose?: boolean;
  Gym?: boolean;
  SwimmingPool?: boolean;
  StorageRoom?: boolean;
  Generator?: boolean;
  Photos?: string;
  Plans?: string;
  Walkin?: string;

}
