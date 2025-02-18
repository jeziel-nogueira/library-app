import { Routes } from '@angular/router';
import { DefaultLoginComponent } from './pages/default-login/default-login.component';
import { DefaultRegisterComponent } from './pages/default-register/default-register.component';

export const routes: Routes = [
    {
        path: "login",
        component: DefaultLoginComponent,
        title:"Login"
    },
    {
        path: "register",
        component: DefaultRegisterComponent,
        title:"Register"
    }
];
