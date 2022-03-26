import { Client } from './../../model/client-model';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { Address } from '../../model/address-model';
import { ClientService } from '../client.service';
import { FormValidation } from '../../@core/utils/FormValidation';

@Component({
  selector: 'ngx-client-insert',
  templateUrl: './client-insert.component.html',
  styleUrls: ['./client-insert.component.scss']
})
export class ClientInsertComponent implements OnInit {


  clientForm: FormGroup

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.createClientForm();
    this.clientForm.enable()
  }
  isEmpty(input: AbstractControl) {



    return (!input.value.trim() ? null: {isEmpty: true})

  }

 validaObrigatoriedade(input: FormControl){

  return (input.value ? null : {obrigatoriedade:true})
 }

  createClientForm() {

    let client = {} as Client
    let address = {} as Address
    this.clientForm = this.formBuilder.group({
      name: [client.name, [Validators.required, FormValidation.isEmpty] ],
      phoneNumber: [client.phoneNumber, [Validators.required, FormValidation.isEmpty] ],
      email: [client.email, Validators.email],
      cpf: [client.cpf],
      observation: [client.observation],
      zipCode: [address.zipCode],
      addressName: [address.addressName],
      uf: [address.uf],
      city: [address.city],
    })



  }


  addClient(): void {

    let client = {} as Client
    let address = {} as Address

    client.name = this.clientForm.get('name').value
    client.phoneNumber = this.clientForm.get('phoneNumber').value
    client.email = this.clientForm.get('email').value
    client.cpf = this.clientForm.get('cpf').value
    client.observation = this.clientForm.get('observation').value

    address.addressName = this.clientForm.get('addressName').value
    address.zipCode = this.clientForm.get('zipCode').value
    address.uf = this.clientForm.get('uf').value
    address.city = this.clientForm.get('city').value

    client.address = address

    this.clientService.addClient(client).subscribe(() => {
      this.showToast('success');
      this.createClientForm()
    })
  }
  showToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Cliente adicionado com sucesso", { status });

  }
}
