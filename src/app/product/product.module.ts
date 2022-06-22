import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule, NbToastrService } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../@theme/theme.module';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductViewComponent } from './product-view/product-view.component';




@NgModule({
  declarations: [
    ProductComponent,
    ProductInsertComponent,
    ProductListComponent,
    ProductViewComponent,

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
    Ng2SmartTableModule,
    NbSpinnerModule
  ],
  providers: [
    NbToastrService
  ]
})
export class ProductModule { }
