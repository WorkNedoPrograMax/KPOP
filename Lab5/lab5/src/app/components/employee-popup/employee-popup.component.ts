// src/app/components/employee-popup/employee-popup.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../services/employee.service';
import { FavoritesService } from '../../services/favorites.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-popup',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './employee-popup.component.html',
  styleUrls: ['./employee-popup.component.css']
})
export class EmployeePopupComponent {
  employee: Employee;

  // Change dialogRef to be public
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    public dialogRef: MatDialogRef<EmployeePopupComponent>, // Make this public
    private favoritesService: FavoritesService
  ) {
    this.employee = data;
  }

  addToFavorites() {
    this.favoritesService.addFavorite(this.employee);
  }

  closePopup() {
    this.dialogRef.close();
  }
}
