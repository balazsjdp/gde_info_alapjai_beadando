import { Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { ImdbService } from '../../../services/imdb.service';
import { Movie } from '../../../models/movie.interface';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList implements OnInit {
  _imdb: ImdbService = inject(ImdbService);
  movies: WritableSignal<Movie[]> = signal<Movie[]>([]);

  @Input() limit: number | undefined;

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    const movies = await this._imdb.getTop250();
    this.movies.set(this.limit ? movies.slice(0, this.limit) : movies);
  }
}
