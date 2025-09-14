import { Component } from '@angular/core';
import { MovieList } from '../../core/components/movie-list/movie-list';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [MovieList],
})
export class HomeComponent {}
