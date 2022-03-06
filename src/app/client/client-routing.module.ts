import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInsertComponent } from './client-insert/client-insert.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientComponent } from './client.component';

const routes: Routes = [

  {
    path: '', component: ClientComponent,

    children: [
      { path: 'insert', component: ClientInsertComponent },
      { path: 'list', component: ClientListComponent },
      { path: 'view/:id', component: ClientViewComponent }
    ]

  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
