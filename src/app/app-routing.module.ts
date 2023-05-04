import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './admin-dash/add-question/add-question.component';
import { AddQuizComponent } from './admin-dash/add-quiz/add-quiz.component';
import { EditCategoryComponent } from './admin-dash/edit-category/edit-category.component';
import { EditQuizComponent } from './admin-dash/edit-quiz/edit-quiz.component';
import { ListCategoriesComponent } from './admin-dash/list-categories/list-categories.component';
import { ListQuizComponent } from './admin-dash/list-quiz/list-quiz.component';
import { NewCategoryComponent } from './admin-dash/new-category/new-category.component';
import { ShowCategoryComponent } from './admin-dash/show-category/show-category.component';
import { SidebarComponent } from './admin-dash/sidebar/sidebar.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { HomeComponent } from './user-dash/home/home.component';
import { ListQuizUserComponent } from './user-dash/list-quiz-user/list-quiz-user.component';
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
      },
      {
        "path": "listquizuser",
        "component": ListQuizUserComponent
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
      },
      {
        "path" : "addquiz",
        "component" : AddQuizComponent
      },
      {
        "path" : "showcategory",
        "component" : ShowCategoryComponent
      },
      {
        "path" : "addquestion",
        "component" : AddQuestionComponent
      },
      {
        "path" : "listquiz",
        "component" : ListQuizComponent
      },
      {
        "path" : "editquiz",
        "component" : EditQuizComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
