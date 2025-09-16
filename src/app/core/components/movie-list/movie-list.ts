import { Component, OnInit,  } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { MovieBase } from '../_movie-base/movie-base';

@Component({
  selector: 'app-movie-list',
  imports: [MovieCard],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList extends MovieBase implements OnInit  {}
