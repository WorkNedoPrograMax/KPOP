// src/app/services/favorites.service.ts
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';
import { Employee } from './employee.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private _favorites$ = new BehaviorSubject<Employee[]>([]);
  favorites$ = this._favorites$.asObservable();

  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create(); // Ініціалізуємо Storage
    const storedFavorites = await this.storage.get('favorites');
    this._favorites$.next(storedFavorites || []);
  }

  async addFavorite(employee: Employee) {
    const currentFavorites = this._favorites$.getValue();
    const updatedFavorites = [...currentFavorites, employee];
    this._favorites$.next(updatedFavorites);
    await this.storage.set('favorites', updatedFavorites);
  }

  async removeFavorite(employee: Employee) {
    const currentFavorites = this._favorites$.getValue();
    const updatedFavorites = currentFavorites.filter(
      (fav) => fav.firstName !== employee.firstName
    );
    this._favorites$.next(updatedFavorites);
    await this.storage.set('favorites', updatedFavorites);
  }
}
