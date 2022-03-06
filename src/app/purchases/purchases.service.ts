import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Console } from "console";
import { LocalDataSource } from "ng2-smart-table";
import { Observable } from "rxjs";
import { PlatformPurchases } from "../model/platform-purchases-model";
import { Purchases } from "../model/purchases-model";

@Injectable({
  providedIn: 'root',

})
export class PurchasesService {


  baseUrl = "http://localhost:3000/purchases"

  constructor(private http: HttpClient) { }

  source: LocalDataSource = new LocalDataSource();



  getPurchase(): Observable<Purchases[]> {
    return this.http.get<Purchases[]>(this.baseUrl)
  }

  insert(purchase: Purchases) {
    return this.http.post(this.baseUrl, purchase)
  }

  getPurchaseById(id: number): Observable<Purchases> {
    return this.http.get<Purchases>(this.baseUrl + "/" + id);
  }

  getShoppingForPlatforms(platform: PlatformPurchases): Purchases[] {
    let platformPurchases: Purchases[] = []
    this.getPurchase().subscribe((purchase) => {

      purchase.forEach(element => {

        if (element.platformPurchases.id == platform.id) {
          platform.totalValue = + element.unitPrice
          platformPurchases.push(element)
        }
      });

    })
    console.log(platformPurchases)
    return platformPurchases
  }


  getSource(idPlatform: any): LocalDataSource {

    let source: PlatformPurchasesSource[] = [];


    this.getPurchase().subscribe((shopping) => {

      shopping.forEach(element => {

        if (element.platformPurchases.id == idPlatform) {
          let platformPurchasesSource = new PlatformPurchasesSource()
          platformPurchasesSource.id = element.id
          platformPurchasesSource.purchaseDate = element.purchaseDate
          platformPurchasesSource.platform = element.platformPurchases.name
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
  purchaseDate: Date;
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
