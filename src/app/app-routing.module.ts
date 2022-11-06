import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGuardGuard } from './services/user-guard.guard';
import { HomeComponent } from './user-dash/home/home.component';

const routes: Routes = [
  {
    "path" : "",
    "component" : LoginComponent
  },
  {
    "path" : "login",
    "component" : LoginComponent
  },
  {
    "path" : "signup",
    "component" : SignupComponent
  },
  {
    "path" : "user",
    "component" : DashboardComponent,
    "canActivate" : [UserGuardGuard],
    children : [
      {
        "path" : "",
        "component" : HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
