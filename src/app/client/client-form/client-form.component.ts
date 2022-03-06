import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Address } from '../../model/address-model';
import { Client } from '../../model/client-model';
import { ClientService } from '../client.service';

@Component({
  selector: 'ngx-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  client: Client
  clientForm: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private clientService: ClientService, private formBuilder: FormBuilder, private dialogService: NbDialogService) { }

  ngOnInit(): void {

    this.createClientForm()
    this.activatedRoute.params.subscribe(params => {

      this.clientService.getClientById(params['client']).subscribe(client => {
        this.client = client;
        this.createClientForm()

      })

    })


  }

  createClientForm() {



    let client = {} as Client
    let address = {} as Address


    if (this.client != null) {
      client = this.client
      address = this.client.address
    }

    this.clientForm = this.formBuilder.group({
      name: [client.name, Validators.required],
      phoneNumber: [client.phoneNumber, Validators.required],
      email: [client.email],
      cpf: [client.cpf],
      observation: [client.observation],
      zipCode: [address.zipCode],
      addressName: [address.addressName],
      uf: [address.uf],
      city: [address.city],
    })

    this.clientForm.disable()
  }
}
