import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.component.html',
  styleUrls: ['./list-of-clients.component.scss']
})
export class ListOfClientsComponent implements OnInit {

  public clients: Client[] = [];

  constructor(private clientServices: ClientService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  private getAllClients() {

    this.clientServices.getAllClients().subscribe(
      data => this.clients = data
    )

  }

}
