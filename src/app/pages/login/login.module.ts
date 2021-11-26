import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule
  ]
})
export class LoginModule { }
