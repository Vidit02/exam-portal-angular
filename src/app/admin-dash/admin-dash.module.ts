import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule,NgModel, ReactiveFormsModule } from '@angular/forms';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    NewCategoryComponent,
    ListCategoriesComponent,
    EditCategoryComponent
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
    ListCategoriesComponent
  ]
})
export class AdminDashModule { }
