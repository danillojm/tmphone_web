import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  menu = MENU_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
