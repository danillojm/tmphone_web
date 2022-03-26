import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
import { ThemeModule } from '../@theme/theme.module';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';
import { StockInsertComponent } from './stock-insert/stock-insert.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';



@NgModule({
  declarations: [
    StockComponent,
    StockInsertComponent,
    StockListComponent

  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    FormsRoutingModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NgxMaskModule.forChild(),
    NbSpinnerModule,
    NbIconModule,
    NbAccordionModule,
    NbListModule,
    NbAlertModule,
    NbFormFieldModule,
  ]
})
export class StockModule { }
