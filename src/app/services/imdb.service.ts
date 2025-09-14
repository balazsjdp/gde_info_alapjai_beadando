import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Movie } from '../models/movie.interface';

@Injectable({ providedIn: 'root' })
export class ImdbService {
  private http = inject(HttpClient);

  // Try a few public mirrors that commonly host the Top 250 in JSON form.
  // Note: Direct IMDb scraping is blocked by CORS in browsers; these mirrors reflect the IMDb Top 250.
  private sources = [
    // Add/update mirrors here if needed
    'https://raw.githubusercontent.com/theapache64/top250/master/top250.json',
    'assets/top250.json', // local fallback
  ];

  async getTop250(): Promise<Movie[]> {
    for (const url of this.sources) {
      try {
        const data: any = await firstValueFrom(this.http.get(url));
        if (Array.isArray(data)) {
          return data
            .map((d: any, idx: number) => ({
              title: String(d.title ?? d.name ?? d.movie ?? 'Ismeretlen cím'),
              year: Number(d.datePublished?.substring(0, 4) ?? d.year ?? d.releaseYear ?? 0),
              rating: Number(d.aggregateRating.ratingValue ?? d.aggregateRating.ratingValue ?? 0),
              image: String(d.image ?? d.poster ?? 'assets/placeholder.png'),
            }))
            .sort((a, b) => b.rating - a.rating);
        }
      } catch (e) {
        console.warn('Forrás hiba, próbálkozás a következővel:', url, e);
      }
    }
    return [];
  }
}
