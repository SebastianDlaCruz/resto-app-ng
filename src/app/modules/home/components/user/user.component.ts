import { Component, Input } from '@angular/core';
import { User } from '../../model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user?: User;
}
