import { Platform } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToggleModule } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { PlatformPurchase } from '../../model/platform-purchase-model';
import { Purchase } from '../../model/purchase-model';
import { PlatformPurchasesService } from '../purchases-platform.service';
import { PurchasesService } from '../purchases.service';

@Component({
  selector: 'ngx-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {

  platforms: PlatformPurchase[] = []
  totalValue: number
  purchasesForPlataform: Purchase[] = []
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private purchasesService: PurchasesService, private platformPurchasesService: PlatformPurchasesService) { }


  idPlatform: any;
  platform: PlatformPurchase;
  shoppingForPlataform: Purchase[] = []

  source = new LocalDataSource()

  ngOnInit(): void {

    this.activatedRouter.params.subscribe(params => {

      this.idPlatform = params['id'];
    })
    // this.shoppingForPlataform = this.shoppingService.getShoppingForPlatforms(this.idPlatform);

    this.platformPurchasesService.getPlatform(this.idPlatform).subscribe((platform) => {
      this.platform = platform;
      this.source = this.purchasesService.getSource(platform.id)
    })


  }


  settings = {

    noDataMessage: 'Não há dados para exibir',
    actions: false,
    edit: false,
    delete: false,


    columns: {
      orderId: { title: 'ID do Pedido', type: 'string' },
      purchaseDate: { title: 'Data da compra', type: 'string' },
      storeName: { title: 'Nome da Loja', type: 'string' },
      product: { title: 'Produto', type: 'string' },
      quantity: { title: 'Quantidade', type: 'number' },
      unitPrice: { title: 'Preço Unitario', type: 'number' },
      totalPrice: { title: 'Preço Total', type: 'number' },
      trackingCode: { title: 'Código de Rastreio', type: 'string' },
      status: { title: 'Status', type: 'string' },
      productArrived: { title: 'Chegou?', type: 'boolean' }

    },
  };
  onUserRowSelect(event): void {


    let purchase = {} as Purchase
    purchase = event.data

    this.router.navigateByUrl('/purchases/details/' + purchase.id);
     ;
  }

}
