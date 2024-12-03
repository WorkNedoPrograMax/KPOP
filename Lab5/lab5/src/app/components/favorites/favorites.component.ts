// src/app/components/favorites/favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Employee } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Employee[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Підписка на `favorites$` для отримання улюблених елементів
    this.favoritesService.favorites$.subscribe((favs) => {
      this.favorites = favs;
    });
  }
}
