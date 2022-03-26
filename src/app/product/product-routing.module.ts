import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product.component';

const routes: Routes = [{
  path: '', component: ProductComponent,
  children: [
    { path: 'insert', component: ProductInsertComponent },
    { path: 'list', component: ProductListComponent },
    { path: 'view/:id', component: ProductViewComponent }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
