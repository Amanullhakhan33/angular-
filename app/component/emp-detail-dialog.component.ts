import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-detail-dialog',
  template: `
    <form [formGroup]="employeeForm">
      <label>Name:</label>
      <input formControlName="name" type="text">
      <br>
      <label>Email:</label>
      <input formControlName="email" type="email">
      <br>
      <label>Phone:</label>
      <input formControlName="phone" type="text">
      <br>
      <button (click)="save()">Save</button>
    </form>
  `
})
export class EmpDetailDialogComponent implements OnInit {
  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required)
  });

  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  save(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value);
    }
  }
}