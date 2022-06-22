import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { PdfsComponent } from './pdfs/pdfs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPrintModule } from 'ngx-print';
import { ReceiptReportComponent } from './receipt-report/receipt-report.component';


@NgModule({
  declarations: [
    ReportComponent,
    PdfsComponent,
    ReceiptReportComponent
  ],
  imports: [
    NgxPrintModule,
    CommonModule,
    ReportRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbSpinnerModule,

  ]
})
export class ReportModule { }
