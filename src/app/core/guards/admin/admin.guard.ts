import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {

  const rol = childRoute.data['roles'] as string[];
  const router = inject(Router);
  const cookieService = inject(CookieService);
  const type = cookieService.get('type');
  const token = cookieService.get('token');

  if (rol.includes(type) && token !== '') {
    return true;
  } else {
    router.navigateByUrl(router.createUrlTree(['/admin/login']));
    return false;
  }


};
