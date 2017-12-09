import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>('/api/employee');
  }

  addEmployee(emp: Employee) {
    return this.http.post('/api/employee', emp);
  }
}
