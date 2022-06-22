import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbToastrService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
import { ThemeModule } from '../@theme/theme.module';
import { OrderInsertComponent } from './order-insert/order-insert.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';




@NgModule({
  declarations: [
    OrderComponent,
    OrderInsertComponent,
    OrderListComponent
  ],
  imports: [
    OrderRoutingModule,
    CommonModule,
    ThemeModule,
    NbMenuModule,
    CommonModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NgxMaskModule.forChild(),
    NbSpinnerModule,
    NbIconModule,
    NbAccordionModule,
    NbListModule
  ],
  providers: [
    NbToastrService
  ]
})
export class OrderModule { }
