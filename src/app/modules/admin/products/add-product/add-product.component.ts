import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductFrom: FormGroup;
  categories: string[] = ["Cat 1", "Cat 2", "Cat 3"];
  subcategories: string[] = ["Subcat 1", "Subcat 2", "Subcat 3"];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {

    this.addProductFrom = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "code": new FormControl(null, Validators.required),
      "qtyPerPack": new FormControl(null, Validators.required),
      "uom": new FormControl(null, Validators.required),
      "spec": new FormControl(null),
      "category": new FormControl(null, Validators.required),
      "subcategory": new FormControl(null, Validators.required)
    })
  }

  submitNewProduct() {
    let newProduct: Product = new Product();

    newProduct.name = this.addProductFrom.get('name')?.value;
    newProduct.name = newProduct.name.trim();
    newProduct.code = this.addProductFrom.get('code')?.value;
    newProduct.qtyPerPack = this.addProductFrom.get('qtyPerPack')?.value;
    newProduct.spec = this.addProductFrom.get('spec')?.value;
    newProduct.uom = this.addProductFrom.get('uom')?.value;

    console.log(JSON.stringify(newProduct));

    this.productService.addANewProduct(newProduct).subscribe({
      next: (response) => {
        console.log("POST call successful value returned in body = " + JSON.stringify(response));
      },
      error: (response) => {
        console.log("POST call in error", response);
      },
      complete: () => {
        this.addProductFrom.reset();
        console.log("The POST observable is now completed.");
      }
    })
  }

  cancel() {
    this.addProductFrom.reset();
  }

}
