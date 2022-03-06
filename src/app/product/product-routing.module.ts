import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{
  path: '', component: ProductComponent,
  children: [
    { path: 'product-insert', component: ProductInsertComponent },
    { path: 'product-list', component: ProductListComponent },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
