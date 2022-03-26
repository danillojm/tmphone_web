import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  menu = MENU_ITEMS

  constructor() { }

  ngOnInit(): void {
  }

}
