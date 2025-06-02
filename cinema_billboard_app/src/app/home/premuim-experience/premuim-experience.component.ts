import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-premuim-experience',
  imports: [],
  templateUrl: './premuim-experience.component.html',
  styleUrl: './premuim-experience.component.css'
})
export class PremuimExperienceComponent {
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
