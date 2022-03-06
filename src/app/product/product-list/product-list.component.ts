import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
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
      observation: { title: 'Observação', type: 'string' },

    },
  };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.source = this.productService.getSource();
  }


  onUserRowSelect(event): void {

    console.log(event.dados)
  }

}
