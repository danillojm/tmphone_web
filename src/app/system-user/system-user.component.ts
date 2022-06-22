import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-system-user',
  templateUrl: './system-user.component.html',
  styleUrls: ['./system-user.component.scss']
})
export class SystemUserComponent implements OnInit {
  menu = MENU_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
