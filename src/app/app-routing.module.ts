import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChoicesComponent} from './common/choices/choices.component';
import {ContactsComponent} from './contacts/contacts.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'choices/:type', component: ChoicesComponent},
  {path: 'contacts/:type', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
