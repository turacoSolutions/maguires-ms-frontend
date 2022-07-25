import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListOfCategoriesComponent } from './list-of-categories/list-of-categories.component';
import { categoriesRoutes } from './categories.routing';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';



@NgModule({
  declarations: [
    ListOfCategoriesComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    RouterModule.forChild(categoriesRoutes),
    CommonModule
  ]
})
export class CategoriesModule { }
