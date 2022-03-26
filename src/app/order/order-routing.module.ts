import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderInsertComponent } from './order-insert/order-insert.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '', component: OrderComponent,
    children: [
      { path: 'insert', component: OrderInsertComponent },
      { path: 'list', component: OrderListComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
