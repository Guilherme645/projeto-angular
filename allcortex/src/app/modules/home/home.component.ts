import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { SignupUserResponse } from '../../models/interfaces/user/SignupUserResponse';
import { singnupUserRequest } from '../../models/interfaces/user/SignupUserRequest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  logincard = true;
   
  loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  SingnupForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });
  constructor (private formBuilder: FormBuilder, private userService: UserService ) {}
  
  onSubimitLoginform(): void{
    console.log('DADOS DO FORMULARIO DE LOGIN', this.loginForm.value)
  }

  onSubimitSingnupform(): void{
  if(this.SingnupForm.value && this.SingnupForm.valid) {
    this.userService.singnupUser(this.SingnupForm.value as singnupUserRequest) .subscribe({
      next:(response)=>{
        if (response) {
        alert("Usuario teste criado com sucesso!");
      }
    },
    error: (err) => console.log(err),
    });
  }
  }

}
