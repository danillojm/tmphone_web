import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbSelectModule, NbTabsetModule, NbToastrService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';




@NgModule({
  declarations: [
    ProductComponent,
    ProductInsertComponent,
    ProductListComponent,

  ],
  imports: [
    ThemeModule,
    NbMenuModule,
    CommonModule,
    ProductRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    FormsRoutingModule,
    TablesRoutingModule,
    Ng2SmartTableModule,

  ],
  providers: [
    NbToastrService
  ]
})
export class ProductModule { }
