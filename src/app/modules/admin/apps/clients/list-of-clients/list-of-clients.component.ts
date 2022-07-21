import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Client } from '@bugsnag/js';
import { ClientServiceService } from '../services/client.service';
@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.component.html',
  styleUrls: ['./list-of-clients.component.scss']
})
export class ListOfClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientServices: ClientServiceService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  private getAllClients() {

    this.clientServices.getAllClients().subscribe(
      data => this.clients = data
    )

  }

}
