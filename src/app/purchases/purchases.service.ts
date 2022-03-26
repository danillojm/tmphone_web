import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Console } from "console";
import { LocalDataSource } from "ng2-smart-table";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PlatformPurchase } from "../model/platform-purchase-model";
import { Purchase } from "../model/purchase-model";

@Injectable({
  providedIn: 'root',

})
export class PurchasesService {


  baseUrl = "http://localhost:3000/purchases"

  constructor(private http: HttpClient) { }

  source: LocalDataSource = new LocalDataSource();



  getPurchase(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.baseUrl)
  }

  insert(purchase: Purchase) {
    return this.http.post(this.baseUrl, purchase)
  }

  getPurchaseById(id: number): Observable<Purchase> {
    return this.http.get<Purchase>(this.baseUrl + "/" + id);
  }

  delete(id: number): Observable<Purchase> {
    return this.http.delete<Purchase>(this.baseUrl + "/" + id);
  }

  update(purchase: Purchase): Observable<Purchase> {
    return this.http.put<Purchase>(this.baseUrl + "/" + purchase.id, purchase);
  }
  getShoppingForPlatforms(platform: PlatformPurchase): Purchase[] {
    let platformPurchases: Purchase[] = []
    this.getPurchase().subscribe((purchase) => {

      purchase.forEach(element => {

        if (element.platformPurchase.id == platform.id) {
          platform.totalValue = + element.unitPrice
          platformPurchases.push(element)
        }
      });

    })
    return platformPurchases
  }

  getDateFormat(date: Date): string {
    let dateInput = new Date(date);
    let dateFormat = dateInput.toLocaleDateString('pt-br', { timeZone: 'UTC' });
    return dateFormat;
  }

  getSource(idPlatform: any): LocalDataSource {

    let source: PlatformPurchasesSource[] = [];


    this.getPurchase().pipe(

    ).subscribe((shopping) => {

      shopping.forEach(element => {

        if (element.platformPurchase.id == idPlatform) {
          let platformPurchasesSource = new PlatformPurchasesSource()
          platformPurchasesSource.id = element.id

          platformPurchasesSource.purchaseDate = this.getDateFormat(element.purchaseDate)
          platformPurchasesSource.platform = element.platformPurchase.name
          platformPurchasesSource.storeName = element.storeName
          platformPurchasesSource.orderId = element.orderId
          platformPurchasesSource.product = element.product.description
          platformPurchasesSource.quantity = element.quantity
          platformPurchasesSource.unitPrice = String(element.unitPrice)
          platformPurchasesSource.totalPrice = String(element.totalPrice)
          platformPurchasesSource.trackingCode = element.trackingCode
          platformPurchasesSource.status = element.status
          platformPurchasesSource.productArrived = element.productArrived
          source.push(platformPurchasesSource)

        }
      })
      this.source.load(source)
    });


    return this.source
  }



}



export class PlatformPurchasesSource {


  constructor() { }
  id: number
  purchaseDate: string;
  platform: string;
  storeName: string;
  orderId: string;
  product: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
  trackingCode: string;
  status: string;
  productArrived: boolean;

}
