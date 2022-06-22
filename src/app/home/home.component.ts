import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  menu = MENU_ITEMS

  constructor() { }

  ngOnInit(): void {
  }

}
