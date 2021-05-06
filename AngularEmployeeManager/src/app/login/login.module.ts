import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [{
  path: '',
  component: LoginComponent
}];



@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LoginModule { }
