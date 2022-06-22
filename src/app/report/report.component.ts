import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../pages-menu';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  menu = MENU_ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
