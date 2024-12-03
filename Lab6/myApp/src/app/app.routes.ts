import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'favorites', component: FavoritesComponent },  // Define favorites route
];
