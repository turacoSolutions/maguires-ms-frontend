import { NgModule } from '@angular/core';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { clientsRoutes } from "./clients.routing";
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component'
import { ClientComponent } from './client/client.component';
import { ListOfClientsComponent } from './list-of-clients/list-of-clients.component';
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

@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    ClientComponent,
    ListOfClientsComponent,
  ],
  imports: [
    RouterModule.forChild(clientsRoutes),
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
export class ClientsModule { }
