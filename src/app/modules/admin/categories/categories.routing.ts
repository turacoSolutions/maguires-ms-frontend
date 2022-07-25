import { Route } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { ListOfCategoriesComponent } from "./list-of-categories/list-of-categories.component";



export const categoriesRoutes: Route[] = [
    {
        path: 'list',
        pathMatch: 'full',
        component: ListOfCategoriesComponent,
        // resolve  : {
        //     categories: AcademyCategoriesResolver
        // },
    },
    {
        path: 'edit',
        pathMatch: 'full',
        component: CategoriesComponent,
    }

]