import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  logInForm!: FormGroup;
  constructor(public router: Router) { }

  ngOnInit(){
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]  ),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)] ), 
    })
  }

  submit(){
    if(this.logInForm.valid){
      const logInFormData = this.logInForm.value;

      console.log('logInFormData = this.logInForm.value:' ,logInFormData)
      
      this.logInForm.reset()
    }
  }
  
  goToForgotPass(){
    this.router.navigate(['/forgot-pass']);
  }

}
