import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StockService } from '../stock.service';

@Component({
  selector: 'ngx-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  source = new LocalDataSource()
  constructor(private stockService: StockService) { }

  ngOnInit(): void {

    this.source = this.stockService.getSource()


  }


  settings = {

    noDataMessage: 'Não há dados para exibir',
    actions: false,
    edit: false,
    delete: false,


    columns: {
      product: { title: 'Produto', type: 'string' },
      quantity: { title: 'Quantidade', type: 'number' },
      unitPrice: { title: 'Preço Unitario', type: 'number' },
      totalPrice: { title: 'Preço Total', type: 'number' },
      salePrice: { title: 'Preço Venda', type: 'number' },
      color: { title: 'Cor', type: 'string' },
      brand: { title: 'Marca', type: 'string' }

    },
  };


}
