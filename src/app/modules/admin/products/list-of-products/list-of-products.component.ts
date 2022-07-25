import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.getAllProducts();

  }

  private getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
