import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private units = 0;

  add() {
    this.units++;
  }

  subtract() {
    if (this.units !== 0) {
      this.units--
    }
  }

  getUnits() {
    return this.units;
  }

  reset() {
    this.units = 0;
  }
}
