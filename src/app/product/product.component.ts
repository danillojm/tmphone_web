import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages/pages-menu';

@Component({
  selector: 'ngx-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  menu = MENU_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
