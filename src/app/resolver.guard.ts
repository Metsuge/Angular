import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  userIbj = {
    userId: 10,
    username: 'Guste'
  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userIbj;
  }


}
