import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientInsertComponent } from './client-insert/client-insert.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ThemeModule } from '../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbDialogModule, NbDialogService, NbInputModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
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
    Ng2SmartTableModule,
    NbDialogModule.forRoot(),
    NgxMaskModule.forChild(),
    NbSpinnerModule

  ]
})
export class ClientModule { }
