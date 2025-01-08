import { Directive, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Directive({
  selector: '[appShowIfAuthorized]'
})
export class ShowIfAuthorizedDirective {

  private cookie = inject(CookieService);
  private token = this.cookie.get('token');
}
