import { Component, Input } from '@angular/core';
import { Movie } from '../../../services/movies/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
