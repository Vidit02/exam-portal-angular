import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './admin-dash/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { HomeComponent } from './user-dash/home/home.component';

const routes: Routes = [
  {
    "path": "",
    "component": LoginComponent
  },
  {
    "path": "login",
    "component": LoginComponent
  },
  {
    "path": "signup",
    "component": SignupComponent
  },
  {
    "path": "user",
    "component": DashboardComponent,
    "canActivate": [UserGuardGuard],
    children: [
      {
        "path": "",
        "component": HomeComponent
      }
    ]
  },
  {

    "path": "admin",
    "component": DashboardComponent,
    "canActivate": [AdminGuardGuard],
    children: [
      {
        "path": "",
        "component": SidebarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
