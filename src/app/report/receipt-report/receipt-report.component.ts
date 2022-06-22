import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReceiptReport } from '../../model/receiptReport';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'ngx-receipt-report',
  templateUrl: './receipt-report.component.html',
  styleUrls: ['./receipt-report.component.scss']
})
export class ReceiptReportComponent implements OnInit {

  constructor() { }

  @Input() receiptReport: ReceiptReport
  @Output() html: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {

  }


  public openPDF(): void {
    let DATA = document.getElementById('htmlData')
    this.html.emit(DATA)
  }
}
