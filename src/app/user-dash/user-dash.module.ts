import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListQuizUserComponent } from './list-quiz-user/list-quiz-user.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListQuizUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HomeComponent
  ]
})
export class UserDashModule { }
