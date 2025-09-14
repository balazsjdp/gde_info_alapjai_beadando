import { Component } from '@angular/core';
import { MovieList } from '../../core/components/movie-list/movie-list';

@Component({
  selector: 'app-recommendations',
  imports: [MovieList],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css',
})
export class Recommendations {}
