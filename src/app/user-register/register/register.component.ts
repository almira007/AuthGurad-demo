import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'src/app/employee/service/toaster.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public loading = false;
  public submitted = false;

  constructor( 
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toast:ToasterService) { 
      this.registerForm = this.buildForm();

    }

  ngOnInit(): void {
  }

  
  // convenience getter for easy access to form fields
  get formValidation() { return this.registerForm.controls; }

  public onSubmit(): void{
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;
    this.userService.addRegisterData(this.registerForm.value)
    .subscribe
    ((data: any) => {
      this.toast.showSuccess('Registration successful','Data Add sucessfully');
      this.router.navigate(['/login']);
    });
  }

  private buildForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]]
    });
  }

}
