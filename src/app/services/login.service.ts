import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl:string = ""

  constructor(private httpClient: HttpClient) { }

  login(email:string, password:string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {email, password}).pipe(
      tap((value)=>{
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

  register(name:string, email:string, password:string){
    return this.httpClient.post<LoginResponse>("", {name, email, password}).pipe(
      tap((value)=>{
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}
