import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../employee.model';

@Injectable()
export class EmployeeDetailsService {

  public employeeDetails:Subject<Employee>;
  constructor() { 
    this.employeeDetails = new Subject();
  }
}
