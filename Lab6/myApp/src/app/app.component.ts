import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonicModule],  // Add this linensure this file has <ion-router-outlet>
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.storage.create(); // Initialize storage
  }
}
