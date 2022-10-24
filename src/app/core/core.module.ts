import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { CanDeactiveGuard } from './guard/can-deactive.guard';
import { UserGuard } from './guard/user.guard';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent
  ],
  providers:[
    AuthService,
    AuthGuardGuard,
    CanDeactiveGuard,
    UserGuard
  ]
})
export class CoreModule { }
