// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';  // Import IonicStorageModule

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),  // Import HttpClientModule
    importProvidersFrom(IonicStorageModule.forRoot())  // Initialize Ionic Storage
  ]
}).catch((err) => console.error(err));
