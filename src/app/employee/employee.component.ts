import { Component, OnInit } from '@angular/core';

import { EmployeeService } from './employee.service';

import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  empList: Employee[] = [];
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.empService.getEmployees().subscribe(
      (data) => this.empList = data
    )
  }

}
