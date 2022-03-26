import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../model/product-model';
import { Purchase } from '../../model/purchase-model';
import { PurchasesService } from '../../purchases/purchases.service';

@Component({
  selector: 'ngx-stock-insert',
  templateUrl: './stock-insert.component.html',
  styleUrls: ['./stock-insert.component.scss']
})
export class StockInsertComponent implements OnInit {

  constructor(private purchasesService: PurchasesService) { }
  purchases: Purchase[] = []
  products: Product[] =[]
  ngOnInit(): void {

    this.purchasesService.getPurchase()
      .subscribe(purchase => {
        purchase.forEach(element => {
          if (element.productArrived) {
            this.purchases.push(element)
          }
        });
      })

    console.log(this.purchases)

  }


}
