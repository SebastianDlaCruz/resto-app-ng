import { Component } from '@angular/core';
import { heroUser } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent {
  userIcon = heroUser;

}
