import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import { ReceiptReport } from '../../model/receiptReport';
import { ReceiptReportService } from '../receiptReport.service';
import html2canvas from 'html2canvas';

@Component({
  selector: 'ngx-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.scss']
})
export class PdfsComponent implements OnInit {

  receiptForm: FormGroup
  receiptReport: ReceiptReport
  constructor(private formBuilder: FormBuilder, private receiptReportService: ReceiptReportService, private rota: Router) { }

  ngOnInit(): void {
    this.createReceiptForm(new ReceiptReport());
  }



  createReceiptForm(receiptReport: ReceiptReport) {


    this.receiptForm = this.formBuilder.group({
      clientName: [receiptReport.clientName],
      cpf: [receiptReport.cpf],
      brandName: [receiptReport.brandName],
      description: [receiptReport.description],
      imei: [receiptReport.imei],
      salePrice: [receiptReport.salePrice],
      observation: [receiptReport.observation],
    })

  }
  generateReceipt() {
    this.receiptReport = new ReceiptReport
    this.receiptReport.clientName = this.receiptForm.get("clientName").value
    this.receiptReport.cpf = this.receiptForm.get("cpf").value
    this.receiptReport.brandName = this.receiptForm.get("brandName").value
    this.receiptReport.description = this.receiptForm.get("description").value;
    this.receiptReport.imei = this.receiptForm.get("imei").value
    this.receiptReport.salePrice = this.receiptForm.get("salePrice").value
    this.receiptReport.observation = this.receiptForm.get("observation").value

    this.receiptReportService.insert(this.receiptReport)
    this.receiptReportService.getReport(this.receiptReport).subscribe((data) => {
      const blob = new Blob([data], { type: 'application/pdf' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'recibo - ' + this.receiptReport.description + " - " + this.receiptReport.clientName + '.pdf'
      link.click()
    })

  }
}

