import { Component, OnInit } from '@angular/core';
import { PlatformPurchase } from '../../../model/platform-purchase-model';
import { Purchase } from '../../../model/purchase-model';

import { PlatformPurchasesService } from '../../purchases-platform.service';
import { PurchasesService } from '../../purchases.service';

@Component({
  selector: 'ngx-puchases-platform-list',
  templateUrl: './puchases-platform-list.component.html',
  styleUrls: ['./puchases-platform-list.component.scss']
})
export class PuchasesPlatformListComponent implements OnInit {

  platforms: PlatformPurchase[] = []
  totalValue: number
  purchasesForPlataform: Purchase[] = []
  constructor(private purchasesService: PurchasesService, private platformPurchasesService: PlatformPurchasesService) { }

  ngOnInit(): void {

    this.platformPurchasesService.getPlatforms().subscribe((platforms) => {

      platforms.forEach(element => {

        this.purchasesService.getShoppingForPlatforms(element);
      })

      this.platforms = platforms
    })

  }
}
