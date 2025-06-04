import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { ShowtimeListComponent } from './showtime-list/showtime-list.component';
import { TheatersComponent } from './theaters/theaters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Cinema Experience - Home'
  },
  {
    path: 'movies',
    component: MoviesComponent,
    title: 'Cinema Experience - All Movies'
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
    title: 'Cinema Experience - Movie Details'
  },
  {
    path: 'showtimes',
    component: ShowtimeListComponent,
    title: 'Cinema Experience - Showtimes'
  },
  {
    path: 'theaters',
    component: TheatersComponent,
    title: 'Cinema Experience - Our Theaters'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];