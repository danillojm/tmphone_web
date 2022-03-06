import { Client } from './../../model/client-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientService } from '../client.service';

@Component({
  selector: 'ngx-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  source = new LocalDataSource()

  settings = {
    noDataMessage: 'Não há dados para exibir',
    actions: {
      position: 'right',
      columnTitle: "Ações",
      add: false
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {

      name: { title: 'Nome', type: 'string' },
      phoneNumber: { title: 'Telefone', type: 'string' },
      email: { title: 'E-mail', type: 'string' },
      cpf: { title: 'CPF', type: 'string' },
      observation: { title: 'Observação', type: 'string' },



    },
  };

  constructor(private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.source = this.clientService.getSource();
  }

  onUserRowSelect(event): void {


    let client = {} as Client
    client = event.data

    this.clientService.setClient(client);
    this.router.navigateByUrl('/client/view/'+client.id);
    // console.log(this.router.navigateByUrl)
    // console.log(client);
  }

}
