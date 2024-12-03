// src/app/components/employee-table/employee-table.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService, Employee } from '../../services/employee.service';
import { EmployeePopupComponent } from '../employee-popup/employee-popup.component';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, EmployeePopupComponent],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'education', 'salary'];

  constructor(private employeeService: EmployeeService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  openPopup(employee: Employee): void {
    this.dialog.open(EmployeePopupComponent, {
      data: employee,
    });
  }
}
