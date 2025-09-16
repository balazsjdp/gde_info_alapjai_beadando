import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Recommendations } from './pages/recommendations/recommendations';
import { Poll } from './pages/poll/poll';
import { OurFavorites } from './pages/our-favorites/our-favorites';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Főoldal' },
  { path: 'top-250', component: Recommendations, title: 'Top 250' },
  { path: 'kerdoiv', component: Poll, title: 'Kérdőív' },
  { path: 'kedvenc-filmjeink', component: OurFavorites, title: 'Kedvenc filmjeink' },
  { path: '**', redirectTo: '' },
];
