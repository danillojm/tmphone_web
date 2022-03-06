import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule, NbMenuModule, NbSelectModule, NbTabsetModule, NbToastrService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';
import { PurchasesInsertComponent } from './purchases-insert/purchases-insert.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { StatusCardComponent } from './purchases-list/status-card/status-card.component';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesComponent } from './purchases.component';
import { PuchasesPlatformListComponent } from './purchases-list/puchases-platform-list/puchases-platform-list.component';
import { PurchasesDetailsComponent } from './purchases-details/purchases-details.component';



@NgModule({
  declarations: [
    PurchasesComponent,
    PurchasesInsertComponent,
    PurchasesListComponent,
    StatusCardComponent,
    PuchasesPlatformListComponent,
    PurchasesDetailsComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    ThemeModule,
    NbMenuModule,
    CommonModule,
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
  ],
  providers: [
    NbToastrService
  ]
})
export class PurchasesModule { }
