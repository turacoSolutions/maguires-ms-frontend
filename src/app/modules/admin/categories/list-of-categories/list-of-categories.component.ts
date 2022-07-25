import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-list-of-categories',
  templateUrl: './list-of-categories.component.html',
  styleUrls: ['./list-of-categories.component.scss']
})
export class ListOfCategoriesComponent implements OnInit {

  allCategories: Category[] = [];
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {

    this.getAllCategories();
  }

  private getAllCategories() {
    this.categoriesService.getAllCategories().subscribe(
      data => {
        this.allCategories = data;
        console.log(this.allCategories);
        this.getCategories();
      }
    )
  }

  private getCategories() {
    for (const cat of this.allCategories) {
      console.log(JSON.stringify(cat.subCategory));
      if (cat.subCategory.length > 0) {
        this.categories.push(cat);
        console.log("Found and just added.");
      }
    }
  }

}
