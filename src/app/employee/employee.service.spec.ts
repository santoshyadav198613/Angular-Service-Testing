import { TestBed, inject } from '@angular/core/testing';

import { AppTestingModule } from '../app-testing/app-testing.module';
import { EmployeeService } from './employee.service';

let data = { id: 1, name: 'Santosh', dob: new Date('10-nov-2000'), salary: 45000 };
let newEmp = { id: 6, name: 'Jitesh', dob: new Date('10-nov-1980'), salary: 85000 };
describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule]
    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));


  it('should return employees', inject([EmployeeService], (service: EmployeeService) => {
    service.getEmployees().subscribe(
      (data) => {
        console.log(data[0]);
        console.log(data);
        expect(data[0]).toBe(data) }
    )
  }));

  it('should add employees', inject([EmployeeService], (service: EmployeeService) => {
    service.addEmployee(newEmp).subscribe(
      (data) => { 
        console.log(data);
        console.log(newEmp);
        expect(data).toBe(newEmp) }
    )
  }));

});
