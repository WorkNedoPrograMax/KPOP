import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { EmployeePopupComponent } from './components/employee-popup/employee-popup.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmployeePopupComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
