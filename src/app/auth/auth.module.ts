import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import {ToastrModule} from "ngx-toastr"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,NgModel, ReactiveFormsModule } from '@angular/forms';
import {NgxSpinnerModule} from "ngx-spinner"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports:[
    SignupComponent,
    LoginComponent
  ]

})
export class AuthModule { }
