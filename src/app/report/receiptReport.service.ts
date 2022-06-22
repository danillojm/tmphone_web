import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReceiptReport } from "../model/receiptReport";

@Injectable({ providedIn: 'root' })
export class ReceiptReportService {

  url = 'http://localhost:3000/'
  baseUrl = 'http://15.228.36.65:3000/generateReceiptReport'

  constructor(private http: HttpClient) {

  }

  insert(receiptReport: ReceiptReport) {
    console.log(this.http.get(this.url + '/generateReport' + receiptReport))
    return this.http.get(this.url + '/generateReport' + receiptReport)
  }

  getReport(receiptReport: ReceiptReport) {

    let searchParams = new HttpParams()
    searchParams = searchParams.set('clientName', receiptReport.clientName)
      .append('cpf', receiptReport.cpf).append('brandName', receiptReport.brandName).append('description', receiptReport.description)
      .append('imei', receiptReport.imei).append('salePrice', receiptReport.salePrice).append('observation', receiptReport.observation)


    return this.http.get(this.baseUrl, {
      responseType: 'arraybuffer',
      headers: {
        'Accept': 'application/pdf'
      },
      params: searchParams

    });
  }

}
