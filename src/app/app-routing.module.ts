import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChoicesComponent} from './common/choices/choices.component';
import {ContactsComponent} from './contacts/contacts.component';
import {UsersComponent} from './users/users.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuard} from './pages/auth.guard';
import {PropertyEditorComponent} from './properties/property-editor/property-editor.component';
import {AuthAdminGuard} from './pages/auth-admin.guard';
import {OthersComponent} from './common/others/others.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'Properties/New', component: PropertyEditorComponent, canActivate: [AuthGuard]},
  {path: 'choices/:type', component: ChoicesComponent, canActivate: [AuthGuard]},
  {path: 'others/choices', component: OthersComponent, canActivate: [AuthGuard]},
  {path: 'contacts/:type', component: ContactsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
