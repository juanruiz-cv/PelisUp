import { Component } from '@angular/core';

interface Movie {
  vote: string;
  img: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  moviesList: Movie[] = [
    {
      vote: '6.8',
      img: './assets/portadas/img1.jpg',
      title: 'Black Widow',
      category: 'movie',
    },
    {
      vote: '7.9',
      img: './assets/portadas/img2.jpg',
      title: 'Shang Chi',
      category: 'movie',
    },
    {
      vote: '8.4',
      img: './assets/portadas/img3.jpg',
      title: 'Loki',
      category: 'serie',
    },
    {
      vote: '8.3',
      img: './assets/portadas/img4.jpg',
      title: 'How I Met Your Mother',
      category: 'serie',
    },
    {
      vote: '8.3',
      img: './assets/portadas/img5.jpg',
      title: 'Money Heist',
      category: 'serie',
    },
    {
      vote: '8.8',
      img: './assets/portadas/img6.jpg',
      title: 'Friends',
      category: 'serie',
    },
    {
      vote: '8.1',
      img: './assets/portadas/img7.jpg',
      title: 'The Big Bang Theory',
      category: 'serie',
    },
    {
      vote: '7.0',
      img: './assets/portadas/img8.jpg',
      title: 'Two And a Half Men',
      category: 'serie',
    },
  ];
  movieFilter: Movie[] = [];
  movieResult: Movie[] = [];
  filter: string = '';
  toSearch: string = '';

  ngOnInit(): void {
    this.movieResult = this.movieFilter = this.moviesList;
  }

  search(text: string) {
    console.log(text);
    this.movieResult = [];
    if (text.length) {
      this.movieFilter.forEach((data) => {
        if (data.title?.toLowerCase().includes(text.toLowerCase()))
          this.movieResult.push(data);
      });
    } else this.movieResult = this.movieFilter;
  }

  filters(value: string) {
    this.toSearch = '';
    this.filter = value;
    if (value.length === 0) this.movieFilter = this.moviesList;
    else {
      this.movieFilter = this.moviesList.filter(
        (item) => item.category === value
      );
    }
    this.movieResult = this.movieFilter;
  }
}
