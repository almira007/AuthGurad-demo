import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular-Assesement-Demo-Json';
  public isMenu: boolean;
  
  constructor(
    private authService: AuthService
  ) {
    this.isMenu = false;
  }

  ngOnInit(): void {
    this.authService.userIsLoginObservable$.subscribe((res) => {
      this.isMenu = res
    })
  }
}
