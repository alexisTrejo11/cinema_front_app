import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-premuim-experience',
  imports: [],
  templateUrl: './premuim-experience.component.html',
  styleUrl: './premuim-experience.component.css'
})
export class PremuimExperienceComponent {
  featuredMovies:Movie[] = []

  constructor(private router:Router) {}

  navigateToTheaters(){
    this.router.navigate(['/theaters'])
  }
}
