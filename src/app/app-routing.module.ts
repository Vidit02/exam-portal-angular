import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCategoryComponent } from './admin-dash/edit-category/edit-category.component';
import { ListCategoriesComponent } from './admin-dash/list-categories/list-categories.component';
import { NewCategoryComponent } from './admin-dash/new-category/new-category.component';
import { SidebarComponent } from './admin-dash/sidebar/sidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { HomeComponent } from './user-dash/home/home.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

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
    "component": UserdashboardComponent,
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
    "component": AdmindashboardComponent,
    "canActivate": [AdminGuardGuard],
    children: [
      {
        "path": "",
        "component": HomeComponent
      },
      {
        "path" : "newcategory",
        "component" : NewCategoryComponent
      },
      {
        "path" : "listcategory",
        "component" : ListCategoriesComponent
      },
      {
        "path" : "editcategory",
        "component" : EditCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
