import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text: string = "";
  @Input() disabled: boolean = false;
  @Input() type: string = "button";
  @Output() onClick = new EventEmitter<void>();

  click() {
    this.onClick.emit();
  }
}
