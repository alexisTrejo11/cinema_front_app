import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-movies',
  imports: [],
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.css'
})
export class FeaturedMoviesComponent {
  featuredMovies:Movie[] = []

  constructor(private router: Router) {}

  selectMovie(movie: any) {

  }
  
  navigateToMovies() {
    this.router.navigate(['movies'])
  }
}
