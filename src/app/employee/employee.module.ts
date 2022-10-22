import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from './service/employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipePipe } from './currency-pipe/currency-pipe.pipe';
import { ToasterService } from './service/toaster.service';
import { EmployeeDetailsService } from './service/employee-details.service';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CurrencyPipePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[
    EmployeeServiceService,
    ToasterService,
    EmployeeDetailsService
  ]
})
export class EmployeeModule { }
