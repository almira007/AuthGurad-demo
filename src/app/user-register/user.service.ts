import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable()
export class UserService {

  public baseUrl: string;

  
  constructor(private http: HttpClient) { 
    this.baseUrl = 'http://localhost:3000/';
  }

  
  /**
   * Get list of user data
   * @returns User data
   */
  public getLoginData(): Observable<User[]>{
    const url: string = this.baseUrl + 'user/';
    return this.http.get<User[]>(url);
  }
 
  public addRegisterData(user: User): Observable<User>{
    const url: string = this.baseUrl + 'user';
    return this.http.post(url,user);
  } 
}
