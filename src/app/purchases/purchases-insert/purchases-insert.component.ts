import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from '../../@core/utils/FormValidation';
import { PlatformPurchase } from '../../model/platform-purchase-model';

import { Product } from '../../model/product-model';
import { Purchase } from '../../model/purchase-model';

import { ProductService } from '../../product/product.service';
import { PlatformPurchasesService } from '../purchases-platform.service';
import { PurchasesService } from '../purchases.service';

@Component({
  selector: 'ngx-purchases-insert',
  templateUrl: './purchases-insert.component.html',
  styleUrls: ['./purchases-insert.component.scss']
})
export class PurchasesInsertComponent implements OnInit {


  purchasesForm: FormGroup;


  platforms: PlatformPurchase[] = []
  products: Product[] = []

  constructor(private formBuilder: FormBuilder, private purchasesService: PurchasesService,
    private platformPurchasesServices: PlatformPurchasesService, private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })

    this.platformPurchasesServices.getPlatforms().subscribe((platforms) => {
      this.platforms = platforms
    })
    this.createPurchasesForm()
  }




  createPurchasesForm() {


    let purchases = {} as Purchase

    this.purchasesForm = this.formBuilder.group({
      purchaseDate: [purchases.purchaseDate, [Validators.required]],
      platform: [purchases.platformPurchase, Validators.required],
      storeName: [purchases.storeName, [Validators.required, FormValidation.isEmpty]],
      orderId: [purchases.orderId, [Validators.required, FormValidation.isEmpty]],
      product: [purchases.product, [Validators.required]],
      quantity: [purchases.quantity, [Validators.required, FormValidation.isEmpty]],
      unitPrice: [purchases.unitPrice, [Validators.required, FormValidation.isEmpty]],
      totalPrice: [0],
      trackingCode: [purchases.trackingCode],
      color: [purchases.color, [Validators.required]],
      observation: [purchases.observation],

    })

  }

  calculateTotalValue() {

    let quantity = this.purchasesForm.get('quantity').value
    let unitPrice = this.purchasesForm.get('unitPrice').value
    let totalPrice = (unitPrice * quantity)

    this.purchasesForm.get('totalPrice').setValue(totalPrice)


  }


  insert() {

    let puchase = new Purchase();
    puchase.purchaseDate = new Date(this.purchasesForm.get('purchaseDate').value);
    puchase.platformpurchase_id = this.purchasesForm.get('platform').value.id
    puchase.storeName = this.purchasesForm.get('storeName').value
    puchase.orderId = this.purchasesForm.get('orderId').value
    puchase.product_id = this.purchasesForm.get('product').value.id
    puchase.quantity = this.purchasesForm.get('quantity').value
    puchase.unitPrice = this.purchasesForm.get('unitPrice').value
    puchase.totalPrice = this.purchasesForm.get('totalPrice').value
    puchase.trackingCode = this.purchasesForm.get('trackingCode').value
    puchase.observation = this.purchasesForm.get('observation').value
    puchase.color = this.purchasesForm.get('color').value

    this.purchasesService.insert(puchase).subscribe(() => {
      this.createPurchasesForm();
    })

  }

}
