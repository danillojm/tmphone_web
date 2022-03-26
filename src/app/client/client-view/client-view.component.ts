import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { FormValidation } from '../../@core/utils/FormValidation';
import { Address } from '../../model/address-model';
import { Client } from '../../model/client-model';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { ClientService } from '../client.service';


@Component({
  selector: 'ngx-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  client: Client
  clientForm: FormGroup
  loading = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private clientService: ClientService,
    private formBuilder: FormBuilder, private dialogService: NbDialogService, private toastrService: NbToastrService) { }

  ngOnInit(): void {

    this.createClientForm()
    this.activatedRoute.params.subscribe(params => {

      this.clientService.getClientById(params['id']).subscribe(client => {
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
      name: [client.name, [Validators.required, FormValidation.isEmpty]],
      phoneNumber: [client.phoneNumber, [Validators.required, FormValidation.isEmpty]],
      email: [client.email],
      cpf: [client.cpf],
      observation: [client.observation],
      zipCode: [address?.zipCode],
      addressName: [address?.addressName],
      uf: [address?.uf],
      city: [address?.city],
    })

    this.clientForm.disable()
  }


  alterClient() {
    this.clientForm.enable()
  }

  delete() {

    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: "Deletar",
        msg: "Deja deletar esse registro?"
      }
    }).onClose.subscribe((clickConfimation) => {

      if (clickConfimation) {

        this.loading = true

        setTimeout(() => {

          this.clientService.delete(this.client.id).subscribe(() => {

            this.clientForm.disable()
            this.router.navigate(['/client/list'])
          })
          this.loading = false
        }, 1000)
      }



    })

  }

  save() {
    let client = {} as Client

    client.id = this.client.id
    client.name = this.clientForm.get('name').value
    client.phoneNumber = this.clientForm.get('phoneNumber').value
    client.email = this.clientForm.get('email').value
    client.cpf = this.clientForm.get('cpf').value
    client.observation = this.clientForm.get('observation').value

    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",

      },

    }).onClose.subscribe((clickConfimation) => {

      if (clickConfimation) {
        this.loading = true

        setTimeout(() => {
          this.clientService.update(client).subscribe(
            result => {
              this.clientForm.disable()
              this.router.navigate(['/client/list'])
            },
            error => {
              this.showDangerToast('danger');
            }
          )
          this.loading = false
        },1000)

      }

    });

  }
  showSuccessToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Cliente atualizado com sucesso", { status });
  }

  showDangerToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Erro ao atualizar", { status });
  }
}


