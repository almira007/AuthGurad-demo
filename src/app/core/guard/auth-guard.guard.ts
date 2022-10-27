import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private authService: AuthService,
    private route: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.userIsLogin()) {
      return true;
    } else {
      // alert("you have not permission to access Employee");
      this.route.navigate(['login']);
      return false
    }
  }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user: any = localStorage.getItem('user');
    let loggedInUser: any = JSON.parse(user);

    if (loggedInUser.role === 'admin') {

      return true;
    } else {
      console.log('Unauthorized to open link: ' + state.url);
      return false;
    }
  }

  canLoad(route: Route): boolean {
    if (this.authService.userIsLogin()) {
      return true;
    } else {
      this.route.navigate(['login']);
      return false
    }
  }

}
