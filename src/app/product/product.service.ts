import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs';
import { Product } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  source: LocalDataSource = new LocalDataSource();

  baseUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }


  getSource(): LocalDataSource {

    let source: ProductSource[] = [];

    this.getProducts().subscribe(products => {

      products.forEach(element => {
        console.log(element)
        let productSource = new ProductSource()
        productSource.id = element.id
        productSource.code = element.code
        productSource.category = element.category.name
        productSource.brand = element.brand
        productSource.observation = element.observation
        productSource.description = element.description
        source.push(productSource)

      });

      this.source.load(source)
    })

    return this.source
  }

  insert(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}

class ProductSource {

  constructor(

  ) {
  }


  id: string
  code: string
  category: string
  brand: string
  costPrice: string
  salePrice: string
  currentInventory: string
  observation: string
  description: string

}
