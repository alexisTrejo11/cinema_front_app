import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { Movie } from '../models/movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit  {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres = ["test0", "test1", "test2", "test3"]
  selectedGenre = "all"
  
  constructor(private movieService:MovieService) {}

  selectMovie(movie: Movie) {
    console.log(`Movie Selected ${movie.id}`)
  }
  
  ngOnInit(): void {
    this.loadMovies()
  }

   loadMovies() {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movies = data;
        this.filteredMovies = data;
        console.log('Movies Loaded:', this.movies.length);
      },
      error: (error) => {
        console.error('Error while loading movies:', error);
      },
      complete: () => {
        console.log('Succesfully Movies Loaded.');
      }
    });
  }



  filterByGenre(genre: string) {
    if (genre === "all") {
      this.selectedGenre = "all"
      this.filteredMovies = this.movies;
    } else {
      this.selectedGenre = genre
      this.movies.filter(movie => movie.genre === genre);
    }
  }

}
