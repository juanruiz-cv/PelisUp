import { Component } from '@angular/core';
import { Movie, ResponseData } from 'src/app/services/movies/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  moviesList: Movie[] = [];
  movieResult: Movie[] = [];
  toSearch: string = '';

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this._moviesService.getMovies().subscribe({
      next: (response: ResponseData) => {
        this.movieResult = this.moviesList = response?.results || [];
      },
      error: (err) => {
        console.error('Error -> getMovies: ', err);
      },
      complete() {
        console.log('Listo');
      },
    });
  }

  search(text: string) {
    console.log(text);
    this.movieResult = [];
    if (text.length) {
      this.moviesList.forEach((data) => {
        if (data.title?.toLowerCase().includes(text.toLowerCase()))
          this.movieResult.push(data);
      });
    } else this.movieResult = this.moviesList;
  }
}
