import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { PlatformPurchase } from '../../model/platform-purchase-model';
import { Product } from '../../model/product-model';
import { Purchase } from '../../model/purchase-model';
import { Stock } from '../../model/stock-model';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { StockService } from '../../stock/stock.service';
import { PurchasesService } from '../purchases.service';
import { PurchaseStatus } from './purchaseStatus';



@Component({
  selector: 'ngx-purchases-details',
  templateUrl: './purchases-details.component.html',
  styleUrls: ['./purchases-details.component.scss']
})
export class PurchasesDetailsComponent implements OnInit {

  purchasesForm: FormGroup;
  purchase: Purchase
  platform: PlatformPurchase
  product: Product
  loading = false;
  productArrived = false
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private purchasesService: PurchasesService,
    private formBuilder: FormBuilder, private dialogService: NbDialogService, private toastrService: NbToastrService,
    private stockService: StockService) { }

  ngOnInit(): void {

    this.createPurchasesForm()
    this.activatedRoute.params.subscribe(params => {

      this.purchasesService.getPurchaseById(params['id']).subscribe(purchase => {
        this.purchase = purchase;
        this.createPurchasesForm()

      })

    })
  }
  dateFormatLocale(date: Date): string {

    let inputDate = new Date(date);
    let dateFormat = inputDate.toLocaleString('pt-br')
    return dateFormat
  }


  createPurchasesForm() {


    let purchases = {} as Purchase

    if (this.purchase != null) {
      purchases = this.purchase
    }

    this.product = purchases.product;
    this.platform = purchases.platformPurchase;

    this.purchasesForm = this.formBuilder.group({
      trackingCode: [purchases.trackingCode],
      productArrived: [purchases.productArrived],
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
  }

  delete() {

    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",
      },

    }).onClose.subscribe(() => {


      this.loading = true;

      this.purchasesService.delete(this.purchase.id).subscribe(() => {
        this.loading = false;
        this.showSuccessToast('success');
        this.router.navigate(['/purchases/platforms']);
      })

    })


  }

  save() {

    this.purchase.observation = this.purchasesForm.get('observation').value
    this.purchase.trackingCode = this.purchasesForm.get('trackingCode').value
    this.purchase.productArrived = this.productArrived
    if (this.productArrived) {

      this.purchase.status = PurchaseStatus.FINALIZED
    }

    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        title: 'Comfirmar',
        msg: "Deseja confirmar as alterções?",
      },

    }).onClose.subscribe((confirm) => {

      if (confirm) {
        this.loading = true
        console.log(this.purchase)
        setTimeout(() => {
          this.purchasesService.update(this.purchase).subscribe(() => {


            error => {
              console.log(error)
            }



          })
        }, 1000)
        this.insertStock()

      }

    });

  }

  createStock(purchase: Purchase) {
    let stock = {} as Stock


    stock.product_id = purchase.product.id
    stock.quantity = purchase.quantity
    stock.unitPrice = purchase.unitPrice
    stock.totalPrice = purchase.totalPrice
    stock.brand = purchase.product.brand
    stock.purchase_id = purchase.id
    stock.color = purchase.color
    return stock
  }

  insertStock() {
    let stock = this.createStock(this.purchase);

    setTimeout(() => {
      this.stockService.insert(stock).subscribe(() => {
        this.showSuccessToast('success');
        this.loading = false
      })

    }, 2000)


  }


  showSuccessToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Compra atualizada com sucesso", { status });
  }

  showDangerToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Erro ao atualizar", { status });
  }


  showDangerDeleteToast(status: NbComponentStatus) {

    this.toastrService.show(status, "Erro ao excluir", { status });
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }

  activateButton() {

    if (PurchaseStatus.FINALIZED === this.purchase.status) {
      return false;
    }
    return true;
  }


}
