import { Route } from "@angular/router";
import { ClientsComponent } from "./clients.component";
import { ListOfClientsComponent } from "./list-of-clients/list-of-clients.component";


export const clientsRoutes: Route[] = [
    {
        path: 'list',
        pathMatch: 'full',
        component: ListOfClientsComponent,
        // resolve  : {
        //     categories: AcademyCategoriesResolver
        // },
    },
    {
        path: 'edit',
        pathMatch: 'full',
        component: ClientsComponent,
    }
    // children: [
    //     {
    //         path: 'edit',
    //         pathMatch: 'full',
    //         component: EditClientComponent,
    //         // resolve  : {
    //         //     courses: AcademyCoursesResolver
    //         // }
    //     },
    // {
    //     path: 'add',
    //     pathMatch: 'full',
    //     component: AddClientComponent,
    //     // resolve  : {
    //     //     course: AcademyCourseResolver
    //     // }
    // },
    // {
    //     path: 'edit',
    //     pathMatch: 'full',
    //     component: EditClientComponent,
    //     // resolve  : {
    //     //     course: AcademyCourseResolver
    //     // }
    // }
    // {
    //     path     : ':id',
    //     component: AcademyDetailsComponent,
    //     resolve  : {
    //         course: AcademyCourseResolver
    //     }
    // }
    // ]
    //     }
];