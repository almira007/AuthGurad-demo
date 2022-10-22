import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeDetailsService } from '../service/employee-details.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeedata: Employee;
  
  constructor(
    private activateroute: ActivatedRoute,
    private employeeDetailsService: EmployeeDetailsService
  ) {

    this.employeedata = new Employee();
    
  }
  ngOnInit(): void {
    this.employeeDetailsService.employeeDetails.subscribe((res:Employee)=>{
      this.employeedata = res;
      console.log(res);
    })
  }
 
}
