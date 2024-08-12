import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './component/home.component';
import { EmpDetailDialogComponent } from './component/emp-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { EmployeeService } from './services/employee.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmpDetailDialogComponent],
  imports: [
    ReactiveFormsModule
  ]
})
export class EmpDetailDialogModule { }

@NgModule({
  declarations: [HomeComponent],
  imports: [
    MatTableModule
  ]
})


@NgModule({
  imports: [
    BrowserModule,
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [HomeComponent] // Assuming HomeComponent is your main component
})
export class AppModule { }