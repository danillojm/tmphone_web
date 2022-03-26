import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockInsertComponent } from './stock-insert/stock-insert.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
  {
    path: '', component: StockComponent,

    children: [
      { path: 'insert', component: StockInsertComponent },
      { path: 'list', component: StockListComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
