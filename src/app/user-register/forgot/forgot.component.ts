import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from 'src/app/employee/service/toaster.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  public forgotForm: FormGroup;
  data:any;
  
  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToasterService,
    private userservice:UserService
  ) {
    this.forgotForm = this.buildForm()

  }

  ngOnInit(): void {
  }
  public buildForm(): FormGroup {
    return this.formBuilder.group({
      email: ['']
    });
  }

 public onForgotpassword(){
  this.userservice.getLoginData().subscribe((result)=>{
    console.log(result);
    this.data=result;
  })
 }
  
}