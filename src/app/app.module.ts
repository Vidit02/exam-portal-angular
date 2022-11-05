import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ToastrModule} from "ngx-toastr"
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NgxSpinnerModule} from "ngx-spinner"
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authInterceptor } from './services/authInterceptor.interceptor';
// import { reqInterceptor, ReqInterceptorInterceptor } from './services/req-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [authInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
