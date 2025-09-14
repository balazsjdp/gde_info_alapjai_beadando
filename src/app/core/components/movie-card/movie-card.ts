import { Component, computed, Input, signal, Signal } from '@angular/core';
import { Movie } from '../../../models/movie.interface';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  @Input() movie : Movie | undefined;


  get ratingStars(): string {
    if (!this.movie) return 'star-rate';
    
    if(this.movie.rating >= 9.1) return 'star_shine';
    if(this.movie.rating >= 8.1) return 'star_rate_half';

    return 'star_rate';

  }


}
