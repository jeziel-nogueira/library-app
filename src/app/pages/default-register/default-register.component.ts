import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { DefaultRegisterLayoutComponent } from "../../components/default-register-layout/default-register-layout.component";

@Component({
  selector: 'app-default-register',
  imports: [
    ReactiveFormsModule,
    PrimaryInputComponent,
    DefaultRegisterLayoutComponent
],
  templateUrl: './default-register.component.html',
  styleUrl: './default-register.component.scss'
})
export class DefaultRegisterComponent {

  registerForm!: FormGroup;
  
    constructor(private router:Router, private loginService: LoginService, private toastService: ToastrService){
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(6)]),
        confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)])
      })
    }
  
    submit(){
      this.loginService.login(this.registerForm.value.email, this.registerForm.value.password).subscribe({
        next:()=> this.toastService.success("Login feito com sucesso"),
        error:()=> this.toastService.error("Erro no login")
      })
    }
  
    navigate(){
      this.router.navigate(["/login"])
    }
}
