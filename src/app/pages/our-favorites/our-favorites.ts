import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { MovieBase } from '../../core/components/_movie-base/movie-base';
import { Movie } from '../../models/movie.interface';
import { MovieCard } from '../../core/components/movie-card/movie-card';

const FAVORITE_MOVIES = ["Inception", "Interstellar", "Fight Club", "The Matrix", "Inglourious Basterds", "The Green Mile", "Star Wars", "Life of Brian","Whiplash"]

@Component({
  selector: 'app-our-favorites',
  imports: [MovieCard],
  templateUrl: './our-favorites.html',
  styleUrl: './our-favorites.css'
})
export class OurFavorites extends MovieBase implements OnInit {
  private _index = signal(0);

  _favMovies = computed<Movie[]>(() =>
    (this.movies() ?? []).filter(m => FAVORITE_MOVIES.includes(m.title))
  );

  _currentMovie = computed<Movie | null>(() => {
    const favs = this._favMovies();
    if (!favs.length) return null;
    const currentIndex = Math.min(Math.max(this._index()), favs.length - 1);
    return favs[currentIndex] ?? null;
  });

  override ngOnInit(): void {
    super.ngOnInit();
  }

  override async getMovies() {
    const movies = await this._imdb.getTop250();
    this.movies.set(movies);
    this._index.set(0);
  }

  showNext() {
    const favs = this._favMovies();
    if (!favs.length) return;
    this._index.update(i => (i + 1) % favs.length);
  }

  showPrev() {
    const favs = this._favMovies();
    if (!favs.length) return;
    this._index.update(i => (i - 1 + favs.length) % favs.length);
  }


}
