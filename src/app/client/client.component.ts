import { MENU_ITEMS } from '../pages-menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  menu = MENU_ITEMS

  constructor() { }

  ngOnInit(): void {
  }

}
