import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemUserInsertComponent } from './system-user-insert/system-user-insert.component';
import { SystemUserListComponent } from './system-user-list/system-user-list.component';
import { SystemUserComponent } from './system-user.component';

const routes: Routes = [
  {
    path: '', component: SystemUserComponent,
    children: [
      { path: 'insert', component: SystemUserInsertComponent },
      { path: 'list', component: SystemUserListComponent },
      { path: 'view/:id', component: SystemUserListComponent },
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUserRoutingModule { }
