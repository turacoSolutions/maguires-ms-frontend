import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { RouterModule } from '@angular/router';
import { productsRoutes } from './products.routing';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ListOfProductsComponent,
    EditProductComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productsRoutes),
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FuseAlertModule,
    SharedModule
  ]
})
export class ProductsModule { }
