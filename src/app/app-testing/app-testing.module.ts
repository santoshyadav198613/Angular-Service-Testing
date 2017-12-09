import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemEmployeeService } from '../employee/in-memory-empAPI';

import { AppComponent } from '../app.component';
import { EmployeeComponent } from '../employee/employee.component';

import { EmployeeService } from '../employee/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemEmployeeService)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppTestingModule { }
