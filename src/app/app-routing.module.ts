import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AuthGuardGuard } from './core/guard/auth-guard.guard';
import { CanDeactiveGuard } from './core/guard/can-deactive.guard';
import { LoginGuard } from './core/guard/login.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotComponent } from './user-register/forgot/forgot.component';
import { LoginComponent } from './user-register/login/login.component';
import { RecoverpasswordComponent } from './user-register/recoverpassword/recoverpassword.component';
import { RegisterComponent } from './user-register/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
     path:'register',
     component:RegisterComponent
  },
  {
     path:'forgot',
     component:ForgotComponent
  },
  {
     path:'recover',
     component:RecoverpasswordComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [CanDeactiveGuard]
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canLoad: [AuthGuardGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
