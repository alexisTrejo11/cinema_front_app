import { Component, input } from '@angular/core';
import { Theater } from '../../models/theather.model';
import { Cinema } from '../../models/cinema.model';

@Component({
  selector: 'app-theater-card',
  imports: [],
  templateUrl: './theater-card.component.html',

})
export class TheaterCardComponent {
  cinema = input.required<Cinema>();
  
}
