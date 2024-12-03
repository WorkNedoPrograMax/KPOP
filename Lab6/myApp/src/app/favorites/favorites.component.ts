import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';  // <-- Import IonicModule
import { CommonModule } from '@angular/common';  // <-- Import CommonModule

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]  // <-- Add IonicModule and CommonModule to imports
})
export class FavoritesComponent implements OnInit {
  selectedPosts: any[] = []; // Array to store the selected posts

  constructor(private storage: Storage) {}

  async ngOnInit() {
    // Load the selected posts from Ionic storage
    const savedSelectedPosts = await this.storage.get('selectedPosts');
    this.selectedPosts = savedSelectedPosts || []; // If no posts are saved, initialize as an empty array
  }
}
