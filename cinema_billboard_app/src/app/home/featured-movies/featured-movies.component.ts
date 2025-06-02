import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-featured-movies',
  imports: [],
  templateUrl: './featured-movies.component.html',
  styleUrl: './featured-movies.component.css'
})
export class FeaturedMoviesComponent {
  featuredMovies:Movie[] = []

  selectMovie(movie: any) {

  }

  navigateToTheaters(){

 }

  navigateToShowtimes() {
    
  }
  
  navigateToMovies() {

  }
}
