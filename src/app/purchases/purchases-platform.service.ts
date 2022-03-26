import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PlatformPurchase } from "../model/platform-purchase-model";


@Injectable({
  providedIn: 'root'
})
export class PlatformPurchasesService {



  baseUrl = "http://localhost:3000/platformPurchases"

  constructor(private http: HttpClient) {

  }


  getPlatforms(): Observable<PlatformPurchase[]> {
    return this.http.get<PlatformPurchase[]>(this.baseUrl)
  }

  getPlatform(id: any): Observable<PlatformPurchase> {
    return this.http.get<PlatformPurchase>(this.baseUrl + "/" + id)
  }

}
