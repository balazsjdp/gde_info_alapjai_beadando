import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Recommendations } from './pages/recommendations/recommendations';
import { Poll } from './pages/poll/poll';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Főoldal' },
  { path: 'top-250', component: Recommendations, title: 'Top 250' },
  { path: 'Kérdőív', component: Poll, title: 'Szavazás' },
  { path: '**', redirectTo: '' },
];
