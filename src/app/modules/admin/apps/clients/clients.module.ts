import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { clientsRoutes } from "./clients.routing";
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component'


@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    EditClientComponent
  ],
  imports: [
    RouterModule.forChild(clientsRoutes),
    CommonModule
  ]
})
export class ClientsModule { }
