import { Component } from '@angular/core';
import { Movie, ResponseData } from 'src/app/services/movies/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  moviesList: Movie[] = [];
  movieResult: Movie[] = [];
  filter: string = '';
  toSearch: string = '';
  textFilter: string = 'Todos';

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  public getAll() {
    this.textFilter = 'Todos';
    this.filter = '';
    this._moviesService.getAll().subscribe({
      next: (response: ResponseData) => {
        this.movieResult = this.moviesList = response?.results || [];
      },
      error: (err) => {
        console.error('Error -> getAll: ', err);
      },
      complete() {
        console.log('Listo');
      },
    });
  }

  public getMovies() {
    this.textFilter = 'Películas';
    this.filter = 'movie';
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

  public getSeries() {
    this.textFilter = 'Series';
    this.filter = 'tv';
    this._moviesService.getSeries().subscribe({
      next: (response: ResponseData) => {
        this.movieResult = this.moviesList = response?.results || [];
      },
      error: (err) => {
        console.error('Error -> getSeries: ', err);
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
