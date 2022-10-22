import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeDetailsService } from '../service/employee-details.service';
import { EmployeeServiceService } from '../service/employee-service.service';
import { ToasterService } from '../service/toaster.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  @Input() public set addEmployee(value: Employee) {
    if (value) {
      this.employeeList.push(value);
    }
  };
  public get addEmployee(): Employee {
    return this._addEmployee;
  }
  @Input() public set updateRecord(value: Employee) {
    if (value) {
      const index = this.employeeList.findIndex((emp: Employee) => emp.id === value.id);
      this.employeeList.splice(index, 1, value);
    }
  };
  public get updateRecord(): Employee {
    return this._updateRecord;
  }

  @Output() public edit: EventEmitter<any>;

  public employeeList: Employee[];
  private _addEmployee!: Employee;
  private _updateRecord!: Employee;

  constructor(private router: Router,
    private employeeDataService: EmployeeServiceService,
    private notification: ToasterService,
    private employeeDetailsService: EmployeeDetailsService
  ) {
    this.employeeList = [];
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  //getEmployee
  getEmployee() {
    this.employeeDataService.getEmployee().subscribe((result) => {
      this.employeeList = result;
    });
  }

  //Edit record
  public editEmployee(employee: Employee): void {
    this.router.navigate(['employee/edit/', employee.id]);
    this.edit.emit(employee)
  }

  //Delete the record
  public deleteEmployeeData(id: any): void {
    this.employeeDataService.deleteEmployee(id).subscribe((result) => {
      this.getEmployee();
      this.notification.showError("Something is wrong", "Delete record sucessfully")
    });
  }

  //Details pass the object
  public detailsEmployee(employee: Employee): void {
    this.employeeDetailsService.employeeDetails.next(employee);
    this.router.navigate(['employee','details'])
    this.notification.showInfo("This is info", "Details of data")
  }
}
