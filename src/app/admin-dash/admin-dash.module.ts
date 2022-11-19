import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule,NgModel, ReactiveFormsModule } from '@angular/forms';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { ShowCategoryComponent } from './show-category/show-category.component';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    NewCategoryComponent,
    ListCategoriesComponent,
    EditCategoryComponent,
    AddQuizComponent,
    ShowCategoryComponent,
    AddQuestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    SidebarComponent,
    NewCategoryComponent,
    ListCategoriesComponent,
    AddQuizComponent,
    ShowCategoryComponent,
    AddQuestionComponent
  ]
})
export class AdminDashModule { }
