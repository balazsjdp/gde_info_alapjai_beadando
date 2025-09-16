import { Component, OnInit, inject, WritableSignal, signal, Input } from "@angular/core";
import { Movie } from "../../../models/movie.interface";
import { ImdbService } from "../../../services/imdb.service";

@Component({
  selector: 'app-movie-list',
  template: "",
})
export class MovieBase implements OnInit {
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
