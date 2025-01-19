import { Component, Input } from '@angular/core';
import { Category } from '../../../../core/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() category: Category | null = null;

}
