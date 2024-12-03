// src/app/services/employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Employee {
  firstName: string;
  lastName: string;
  education: string;
  salary: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'https://api.npoint.io/38aa97a63de39be72c5a';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => { 

        return response;
      }) // Adjust based on JSON structure, e.g., `response.record`
    );
  }
}
