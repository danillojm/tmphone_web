import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  menu = MENU_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
