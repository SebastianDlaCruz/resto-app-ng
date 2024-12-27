import { Component, Input } from '@angular/core';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrl: './qualification.component.css'
})
export class QualificationComponent {

  @Input() number: number = 0;
  start = heroStarSolid;
}
