// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    EmployeeTableComponent,
    FavoritesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
