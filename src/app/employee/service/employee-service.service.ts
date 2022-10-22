import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';



@Injectable()
export class EmployeeServiceService {

  public baseurl: any;

  constructor(
    private http: HttpClient) {
    this.baseurl = "http://localhost:3000/";
  }
  
  getEmployee(): Observable<Employee[]> {
    const url: string = this.baseurl + 'employeeList';
    return this.http.get<Employee[]>(url);
  }

  addEmployee(user: Employee): Observable<Employee> {
    const url: string = this.baseurl + 'employeeList';
    return this.http.post<Employee>(url, user);
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url: string = this.baseurl + 'employeeList/' + id;
    return this.http.delete<Employee>(url);
  }

  updateEmployee(employee: Employee, id: number): Observable<Employee> {
    const url: string = this.baseurl + 'employeeList/' + id;
    return this.http.put<Employee>(url, employee);
  }

}
