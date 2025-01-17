import { Component, inject } from '@angular/core';
import { heroMinusSmall, heroPlusSmall } from '@ng-icons/heroicons/outline';
import { UnitsService } from './services/units.service';

@Component({
  selector: 'app-button-units',
  templateUrl: './button-units.component.html',
  styleUrl: './button-units.component.css'
})
export class ButtonUnitsComponent {

  private units = inject(UnitsService);

  addIcon = heroPlusSmall;
  minuIcon = heroMinusSmall;

  get Units() {
    return this.units.getUnits();
  }

  onAdd() {
    this.units.add();
  }

  onSubtract() {
    this.units.subtract();
  }
}
