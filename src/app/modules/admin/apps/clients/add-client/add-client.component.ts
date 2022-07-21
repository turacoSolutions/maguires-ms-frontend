import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../client';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  addClientForm: FormGroup;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

    this.addClientForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "email": new FormControl(null),
      "address": new FormControl(null),
      "phone_number": new FormControl(null),
    });

    // Create the form
    // this.addClientForm = this._formBuilder.group({
    //   name: ['Brian Hughes'],
    //   username: ['brianh'],
    //   title: ['Senior Frontend Developer'],
    //   company: ['YXZ Software'],
    //   about: ['Hey! This is Brian; husband, father and gamer. I\'m mostly passionate about bleeding edge tech and chocolate! 🍫'],
    //   email: ['hughes.brian@mail.com', Validators.email],
    //   phone: ['121-490-33-12'],
    //   country: ['usa'],
    //   language: ['english']
    // });
  }

  submitNewClient() {
    let newClient: Client = new Client();
    newClient.name = this.addClientForm.get('name')?.value;
    newClient.name = newClient.name.trim();
    newClient.email = this.addClientForm.get('email')?.value;
    newClient.address = this.addClientForm.get('address')?.value;
    newClient.phone_number = this.addClientForm.get('phone_number')?.value;

    console.log(JSON.stringify(newClient));

    this.clientService.addANewClient(newClient).subscribe({
      next: (response) => {
        console.log("POST call successful value returned in body = " + JSON.stringify(response));
      },
      error: (response) => {
        console.log("POST call in error", response);
      },
      complete: () => {
        this.addClientForm.reset();
        console.log("The POST observable is now completed.");
      }
    })

  }

}
