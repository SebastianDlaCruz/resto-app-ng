import { Component, Input } from '@angular/core';
import { Dishes } from '../../../core/models';

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrl: './card-plate.component.css'
})
export class CardPlateComponent {
  @Input({ required: true }) dish?: Dishes;
}
