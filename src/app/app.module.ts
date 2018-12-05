import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PropertiesListComponent} from './properties/properties-list/properties-list.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { ChoicesComponent } from './common/choices/choices.component';
import {FormsModule} from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesListComponent,
    SidebarComponent,
    ChoicesComponent,
    ContactsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
