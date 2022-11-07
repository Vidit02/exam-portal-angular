import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxSpinnerModule} from "ngx-spinner"
import { AuthModule } from './auth/auth.module';
import { authInterceptor } from './services/authInterceptor.interceptor';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserDashModule } from './user-dash/user-dash.module';
import { AdminDashModule } from './admin-dash/admin-dash.module';
// import { reqInterceptor, ReqInterceptorInterceptor } from './services/req-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    UserDashModule,
    AdminDashModule
  ],
  providers: [authInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
