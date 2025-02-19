import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-default-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers:[
    LoginService
  ],
  templateUrl: './default-login.component.html',
  styleUrl: './default-login.component.scss'
})
export class DefaultLoginComponent {
  loginForm!: FormGroup;

  constructor(private router:Router, private loginService: LoginService, private toastService: ToastrService){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  submit(){
    // this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    //   next:()=> this.toastService.success("Login feito com sucesso"),
    //   error:()=> this.toastService.error("Erro no login")
    // })
    this.router.navigate(["/dashboard"])
  }

  navigate(){
    this.router.navigate(["/register"])
  }

  forgot(){
    this.router.navigate(["/recover"])
  }
}
