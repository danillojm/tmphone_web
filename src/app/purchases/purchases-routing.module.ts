import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchasesDetailsComponent } from './purchases-details/purchases-details.component';
import { PurchasesInsertComponent } from './purchases-insert/purchases-insert.component';
import { PuchasesPlatformListComponent } from './purchases-list/puchases-platform-list/puchases-platform-list.component';
import { PurchasesListComponent } from './purchases-list/purchases-list.component';
import { PurchasesComponent } from './purchases.component';

const routes: Routes = [
  {
    path: '', component: PurchasesComponent,
    children: [

      { path: 'insert', component: PurchasesInsertComponent },
      { path: 'platforms', component: PuchasesPlatformListComponent },
      { path: 'list/:id', component: PurchasesListComponent },
      { path: 'details/:id', component: PurchasesDetailsComponent },
    ]
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
