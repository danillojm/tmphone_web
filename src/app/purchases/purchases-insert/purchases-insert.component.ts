import { PlatformPurchases } from './../../model/platform-purchases-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Purchases } from '../../model/purchases-model';
import { PlatformPurchasesService } from '../purchases-platform.service';
import { PurchasesService } from '../purchases.service';
import { FormValidation } from '../../@core/utils/FormValidation';
import { ProductService } from '../../product/product.service';
import { Product } from '../../model/product-model';

@Component({
  selector: 'ngx-purchases-insert',
  templateUrl: './purchases-insert.component.html',
  styleUrls: ['./purchases-insert.component.scss']
})
export class PurchasesInsertComponent implements OnInit {


  purchasesForm: FormGroup;


  platforms: PlatformPurchases[] = []
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


    let purchases = {} as Purchases

    this.purchasesForm = this.formBuilder.group({
      purchaseDate: [purchases.purchaseDate, [Validators.required]],
      platform: [purchases.platformPurchases, Validators.required],
      storeName: [purchases.storeName, [Validators.required, FormValidation.isEmpty]],
      orderId: [purchases.orderId, [Validators.required, FormValidation.isEmpty]],
      product: [purchases.product, [Validators.required]],
      quantity: [purchases.quantity, [Validators.required, FormValidation.isEmpty]],
      unitPrice: [purchases.unitPrice, [Validators.required, FormValidation.isEmpty]],
      totalPrice: [0],
      trackingCode: [purchases.trackingCode],
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

    let puchase = new Purchases();
    puchase.purchaseDate = this.purchasesForm.get('purchaseDate').value
    puchase.platformpurchase_id = this.purchasesForm.get('platform').value.id
    puchase.storeName = this.purchasesForm.get('storeName').value
    puchase.orderId = this.purchasesForm.get('orderId').value
    puchase.product_id = this.purchasesForm.get('product').value.id
    puchase.quantity = this.purchasesForm.get('quantity').value
    puchase.unitPrice = this.purchasesForm.get('unitPrice').value
    puchase.totalPrice = this.purchasesForm.get('totalPrice').value
    puchase.trackingCode = this.purchasesForm.get('trackingCode').value
    puchase.observation = this.purchasesForm.get('observation').value

    console.log(puchase)

    this.purchasesService.insert(puchase).subscribe(() => {
      this.createPurchasesForm();
    })

  }

}
