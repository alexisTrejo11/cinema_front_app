import { Component } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HeroComponent } from './hero/hero.component';
import { FeaturedMoviesComponent } from "./featured-movies/featured-movies.component";
import { PremuimExperienceComponent } from "./premuim-experience/premuim-experience.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturedMoviesComponent, PremuimExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
