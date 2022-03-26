import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { ClientService } from '../../client/client.service';
import { Client } from '../../model/client-model';
import { Order } from '../../model/order-model';
import { Product } from '../../model/product-model';
import { ProductSearchComponent } from '../../shared/product-search/product-search.component';

@Component({
  selector: 'ngx-order-insert',
  templateUrl: './order-insert.component.html',
  styleUrls: ['./order-insert.component.scss']
})
export class OrderInsertComponent implements OnInit {

  orderForm: FormGroup;
  clients: Client[] = [];
  products: Product[] = [];
  paymentMethod: string[]= [
    "Dinheiro",
    "Pix",
    "Cartão de credito"
  ];
  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
    })
    this.createOrderForm()
  }



  createOrderForm() {

    let order = {} as Order;

    this.orderForm = this.formBuilder.group({
      orderDate: [order.orderDate, [Validators.required]],
      client: [order.client, Validators.required],
      observation: [order.observation, Validators.required]
    });

  }

  productSearch() {
    this.dialogService.open(ProductSearchComponent).onClose.subscribe(product => {

      if (product) {
        this.products.push(product);
      }
    })
  }

}
