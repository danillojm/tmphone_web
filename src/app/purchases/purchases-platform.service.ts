import { PlatformPurchases } from './../model/platform-purchases-model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlatformPurchasesService {



  baseUrl = "http://localhost:3000/platformPurchases"

  constructor(private http: HttpClient) {

  }


  getPlatforms(): Observable<PlatformPurchases[]> {
    return this.http.get<PlatformPurchases[]>(this.baseUrl)
  }

  getPlatform(id: any): Observable<PlatformPurchases> {
    return this.http.get<PlatformPurchases>(this.baseUrl + "/" + id)
  }

}
