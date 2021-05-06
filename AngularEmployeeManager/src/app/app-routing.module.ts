import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    // Lazy loading modules
    {
      path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },

  {
    path: '',
    redirectTo: "/login",
    pathMatch: 'full'
  },
  { path: 'dashboash', component: DashboardComponent,canActivate: [AuthGuardService] },
  { path: 'employees', component: EmployeesComponent,canActivate: [AuthGuardService] },
  { path: 'detail', component: EmployeeDetailComponent,canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
