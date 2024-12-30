import { Component, Input } from '@angular/core';
import { List } from './model/list';

@Component({
  selector: 'app-list-footer-info',
  templateUrl: './list-footer-info.component.html',
  styleUrl: './list-footer-info.component.css'
})
export class ListFooterInfoComponent {
  @Input() list?: List;
}
