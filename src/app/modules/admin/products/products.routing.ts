import { Route } from "@angular/router";
import { ListOfProductsComponent } from "./list-of-products/list-of-products.component";
import { ProductsComponent } from "./products.component";


export const productsRoutes: Route[] = [
    {
        path: 'list',
        pathMatch: 'full',
        component: ListOfProductsComponent,
        // resolve  : {
        //     categories: AcademyCategoriesResolver
        // },
    },
    {
        path: 'edit',
        pathMatch: 'full',
        component: ProductsComponent,
    }
]