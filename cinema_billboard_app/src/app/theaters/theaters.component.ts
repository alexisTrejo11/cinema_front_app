import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { TheaterService } from './theather.service';
import { Cinema } from '../models/cinema.model';
import { TheaterCardComponent } from './theater-card/theater-card.component';

@Component({
  selector: 'app-theaters',
  imports: [HeaderComponent, TheaterCardComponent],
  templateUrl: './theaters.component.html',
  styleUrl: './theaters.component.css'
})
export class TheatersComponent implements OnInit {
  cinemas: Cinema[] = [];

  constructor(private theaterService: TheaterService) {}

  ngOnInit(): void {
    this.loadCinemas()
  }

  loadCinemas() {
    this.theaterService.getCinemas().subscribe({
      next: (data: Cinema[]) => {
        this.cinemas = data;
        console.log('Cinemas Loaded:', this.cinemas.length);
      },
      error: (error) => {
        console.error('Error while loading cinemas:', error);
      },
      complete: () => {
        console.log('Succesfully Cinmeas Loaded.');
      }
    });
  }
}
