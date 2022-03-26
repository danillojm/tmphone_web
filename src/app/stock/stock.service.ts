import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { Stock } from '../model/stock-model';

@Injectable({
  providedIn: 'root',
})
export class StockService {

  baseUrl = "http://localhost:3000/stocks";
  source: LocalDataSource = new LocalDataSource();

  constructor(private http: HttpClient) {

  }

  insert(stock: Stock): Observable<Stock> {
    console.log(stock)
    return this.http.post<Stock>(this.baseUrl, stock)
  }
  getAll(): Observable<Stock[]> {
    return this.http.get<Stock[]>(this.baseUrl)
  }


  getSource(): LocalDataSource {

    let stockSource: StockSource[] = [];

    this.getAll().subscribe(stocks => {

      stocks.forEach(element => {
        let stock = new StockSource()
        stock.product = element.product.description
        stock.brand = element.brand
        stock.unitPrice = element.unitPrice
        stock.totalPrice = element.totalPrice
        stock.color = element.color
        stock.quantity = element.quantity
        stock.salePrice = element.product.salePrice
        stockSource.push(stock)

      });
      this.source.load(stockSource)
    })

    return this.source;
  }
}

class StockSource {

  product: string
  quantity: number
  unitPrice: number
  totalPrice: number
  color: string
  brand: string
  purchase: string
  salePrice: number
}
