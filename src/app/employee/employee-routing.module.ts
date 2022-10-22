import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {       
     path:'',
     pathMatch:'full',
     redirectTo:'form'
  },
  {
     path: '', 
     component: EmployeeComponent,
     children:[
      {
         path:'form',
         component:EmployeeFormComponent
      },
      {
         path:'details',
         component:EmployeeDetailsComponent
      },
      {
         path:'edit/:id',
         component:EmployeeFormComponent
      },
      {
          path:'details/:id',
          component:EmployeeDetailsComponent
      }
     ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
