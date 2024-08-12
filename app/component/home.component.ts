import { Component, Inject, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EmpDetailDialogComponent } from './emp-detail-dialog.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  template: `
    <button mat-raised-button (click)="openDialog()">Add Employee</button>
    <table mat-table [dataSource]="employees">
      <!-- columns and rows -->
    </table>
  `
})

export class HomeComponent implements OnInit {

  employees = [];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EmpDetailDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.employeeService.addEmployee(result);
      }
    });
  }

}
