import { Component } from '@angular/core';
import { Movie, ResponseData } from 'src/app/services/movies/movie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  moviesList: Movie[] = [];
  movieResult: Movie[] = [];
  toSearch: string = '';

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  public getSeries() {
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
