import { Route } from "@angular/router";
import { AddClientComponent } from "./add-client/add-client.component";
import { ClientsComponent } from "./clients.component";
import { EditClientComponent } from "./edit-client/edit-client.component";
import { ListOfClientsComponent } from "./list-of-clients/list-of-clients.component";


export const clientsRoutes: Route[] = [
    {
        path: '',
        component: ClientsComponent,
        // resolve  : {
        //     categories: AcademyCategoriesResolver
        // },
        children: [
            {
                path: 'view-all',
                pathMatch: 'full',
                component: ListOfClientsComponent,
                // resolve  : {
                //     courses: AcademyCoursesResolver
                // }
            },
            {
                path: 'add',
                pathMatch: 'full',
                component: AddClientComponent,
                // resolve  : {
                //     course: AcademyCourseResolver
                // }
            },
            {
                path: 'edit',
                pathMatch: 'full',
                component: EditClientComponent,
                // resolve  : {
                //     course: AcademyCourseResolver
                // }
            }
            // {
            //     path     : ':id',
            //     component: AcademyDetailsComponent,
            //     resolve  : {
            //         course: AcademyCourseResolver
            //     }
            // }
        ]
    }
];