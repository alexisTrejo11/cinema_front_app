import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Cinema } from "../models/cinema.model";


@Injectable({"providedIn" : "root"})
export class TheaterService  {
    private apiUrl = 'http://192.168.0.59:8000/api/v1'
    
    constructor(private http: HttpClient) {}

    getCinemas(): Observable<Cinema[]> {
        return this.http.get<Cinema[]>(`${this.apiUrl}/cinemas/active/`).pipe(
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