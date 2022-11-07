import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NewCategoryComponent } from './new-category/new-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule,NgModel, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    HomeComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    SidebarComponent,
    NewCategoryComponent
  ]
})
export class AdminDashModule { }
