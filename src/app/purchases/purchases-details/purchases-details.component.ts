import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FormValidation } from '../../@core/utils/FormValidation';


import { PlatformPurchases } from '../../model/platform-purchases-model';
import { Purchases } from '../../model/purchases-model';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { PlatformPurchasesService } from '../purchases-platform.service';
import { PurchasesService } from '../purchases.service';

@Component({
  selector: 'ngx-purchases-details',
  templateUrl: './purchases-details.component.html',
  styleUrls: ['./purchases-details.component.scss']
})
export class PurchasesDetailsComponent implements OnInit {

  purchasesForm: FormGroup;
  purchase: Purchases
  platforms: PlatformPurchases[] = []
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private purchasesService: PurchasesService, private platformPurchasesService: PlatformPurchasesService,
    private formBuilder: FormBuilder, private dialogService: NbDialogService) { }

  ngOnInit(): void {

    this.platformPurchasesService.getPlatforms().subscribe((platforms) => {
      this.platforms = platforms
    })
    this.createPurchasesForm()
    this.activatedRoute.params.subscribe(params => {

      this.purchasesService.getPurchaseById(params['id']).subscribe(purchase => {
        this.purchase = purchase;
        this.createPurchasesForm()

      })

    })

  }




  createPurchasesForm() {


    let purchases = {} as Purchases

    if (this.purchase != null) {
      purchases = this.purchase
    }

    this.purchasesForm = this.formBuilder.group({
      purchaseDate: [purchases.purchaseDate, [Validators.required, FormValidation.isEmpty]],
      platform: [purchases.platformPurchases, Validators.required],
      storeName: [purchases.storeName, [Validators.required, FormValidation.isEmpty]],
      orderId: [purchases.orderId, [Validators.required, FormValidation.isEmpty]],
      product: [purchases.product, [Validators.required, FormValidation.isEmpty]],
      quantity: [purchases.quantity, [Validators.required, FormValidation.isEmpty]],
      unitPrice: [purchases.unitPrice, [Validators.required, FormValidation.isEmpty]],
      totalPrice: [0],
      trackingCode: [purchases.trackingCode],
      observation: [purchases.observation],

    })
    this.purchasesForm.disable()
  }

  calculateTotalValue() {

    let quantity = this.purchasesForm.get('quantity').value
    let unitPrice = this.purchasesForm.get('unitPrice').value

    let totalPrice = (unitPrice * quantity)

    this.purchasesForm.get('totalPrice').setValue(totalPrice)


  }

  alter() {
    this.purchasesForm.enable()
    console.log(this.purchasesForm.status)
  }

  cancel() {
    this.purchasesForm.disable()
    this.router.navigate(['/purchases/platforms'])
  }

  save() {
    this.openConfirmationDialog()
  }

  updateConfirm() {

  }

  openConfirmationDialog() {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",

      },

    });
  }
}
