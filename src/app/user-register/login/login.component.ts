import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: UserService,
    private alertService: ToastrService
  ) {
    this.loginForm = this.buildForm()
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngOnInit(): void {
    this.loginForm = this.buildForm()

  }


  // convenience getter for easy access to form fields
  get formValidation() { return this.loginForm.controls; }

  public buildForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const username: string = this.formValidation['username'].value;
    const password: string = this.formValidation['password'].value;

    this.authenticationService.getLoginData()
    .subscribe((data) => {
      let user = data.find((user: User) => (user.username === username) && (user.password === password));
      if(user){
        localStorage.setItem('isAuthenticated','true');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate([this.returnUrl]);
      }else{
        this.alertService.success('Invalid Credentials. Try again.');
      }
      this.loading = false;
    });
  }
}
