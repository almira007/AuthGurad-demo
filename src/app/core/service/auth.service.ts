import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  public userIsLoginSubject: BehaviorSubject<boolean>;
  public userIsLoginObservable$: Observable<boolean>;

  constructor() {
    this.userIsLoginSubject = new BehaviorSubject(true);
    this.userIsLoginObservable$ = this.userIsLoginSubject.asObservable();
   }

   
  public userIsLogin(): boolean {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      this.userIsLoginSubject.next(true);
      return true
    } else {
      this.userIsLoginSubject.next(false);
      return false;
    }

  }
}
