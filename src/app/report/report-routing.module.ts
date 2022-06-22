import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfsComponent } from './pdfs/pdfs.component';
import { ReceiptReportComponent } from './receipt-report/receipt-report.component';
import { ReportComponent } from './report.component';

const routes: Routes = [
  {
    path: '', component: ReportComponent,
    children: [
      { path: 'pdfs', component: PdfsComponent },
      { path: 'receiptReport', component: ReceiptReportComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
