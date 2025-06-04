import { Injectable } from "@angular/core";
import { Movie, MovieGenre, MovieRating } from "../models/movie.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { request } from "http";

@Injectable({"providedIn": "root"})
export class MovieService {
    constructor(private http: HttpClient) {}

    private apiUrl = 'http://192.168.0.59:8000/v1/api'
    
    getMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(`${this.apiUrl}/movies/active/`).pipe(
      catchError(this.handleError)
    );
  }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `A client-side error occurred: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code ${error.status}, body was: ${error.error}`;
        }
        console.error(errorMessage);

        return throwError(() => new Error('Something went wrong. Please try again later.'));
    }
}
