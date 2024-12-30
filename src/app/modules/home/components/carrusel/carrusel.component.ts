import { Component } from '@angular/core';
import { Dishes } from '../../../../core/models';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  dishes: Dishes[] = [];
}
