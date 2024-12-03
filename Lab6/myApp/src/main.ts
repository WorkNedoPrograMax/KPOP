import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { IonicStorageModule } from '@ionic/storage-angular'; // Import IonicStorageModule

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    HttpClientModule, 
    importProvidersFrom(IonicStorageModule.forRoot()),
    importProvidersFrom(HttpClientModule), // Add HttpClientModule here
  ],
});

// Initialize Ionic Storage in your AppComponent or a dedicated service
