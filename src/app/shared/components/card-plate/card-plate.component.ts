import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Dishes } from '../../../core/models';

@Component({
  selector: 'app-card-plate',
  templateUrl: './card-plate.component.html',
  styleUrl: './card-plate.component.css'
})
export class CardPlateComponent {

  @Input({ required: true }) dish?: Dishes;
  private router = inject(Router);

  onAdd(id: string) {
    this.router.navigate(['/dish', id]);
  }
}
