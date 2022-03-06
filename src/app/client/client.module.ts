import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientInsertComponent } from './client-insert/client-insert.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDialogModule, NbDialogService, NbInputModule, NbMenuModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { TablesRoutingModule } from '../pages/tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientInsertComponent,
    ClientListComponent,
    ClientViewComponent,
    ClientFormComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    FormsRoutingModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbDialogModule.forRoot()

  ]
})
export class ClientModule { }
