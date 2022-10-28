import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user-register/login/login.component';
import { RegisterComponent } from './user-register/register/register.component';
import { UserService } from './user-register/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './user-register/forgot/forgot.component';
import { RecoverpasswordComponent } from './user-register/recoverpassword/recoverpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    RecoverpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ToastrModule.forRoot({
      timeOut: 15000,
      closeButton: true,
      progressBar:true
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
 ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
