import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recoverpassword',
  templateUrl: './recoverpassword.component.html',
  styleUrls: ['./recoverpassword.component.scss']
})
export class RecoverpasswordComponent implements OnInit {
   public recoverForm:FormGroup;
   public id: any;

  constructor( private formBuilder: FormBuilder,
    private userService: UserService,
    private activateroute:ActivatedRoute) {
    this.recoverForm = this.buildForm()
      
    this.activateroute.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  
  ngOnInit(): void {
    this.getData();
    console.log(this.id);
  }
  public buildForm(): FormGroup {
    return this.formBuilder.group({
      newPassword: [''],
      confirmPassword:['']
    });
  }
 
   public getData(){
     this.userService.getLoginData().subscribe((result) => {
      console.log(result)
     })
   }
  public onSaveData(){
    this.userService.updatePassword(this.recoverForm.value,this.id).subscribe((result) =>{
      console.log(result)
      this.getData();
    })
  }
}
