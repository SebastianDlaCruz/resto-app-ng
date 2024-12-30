import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-error-input',
  templateUrl: './text-error-input.component.html',
  styleUrl: './text-error-input.component.css'
})
export class TextErrorInputComponent {
  @Input() text = ""
}
