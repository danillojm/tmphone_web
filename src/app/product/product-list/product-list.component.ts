import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Product } from '../../model/product-model';
import { ProductService } from '../product.service';

@Component({
  selector: 'ngx-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  source = new LocalDataSource()

  settings = {
    noDataMessage: 'Não há dados para exibir',
    actions: false,
    edit: false,
    delete: false,
    columns: {

      code: { title: 'Código', type: 'number' },
      description: { title: 'Descrição', type: 'string' },
      category: { title: 'Categoria', type: 'string' },
      brand: { title: 'Marca', type: 'string' },
      salePrice: { title: 'Preço venda', type: 'string' },
      observation: { title: 'Observação', type: 'string' },

    },
  };

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.source = this.productService.getSource();
  }



  onUserRowSelect(event): void {


    let product = {} as Product
    product = event.data


    this.router.navigateByUrl('/product/view/' + product.id);
  }
}
