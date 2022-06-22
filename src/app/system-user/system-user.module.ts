import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxMaskModule } from 'ngx-mask';
import { ThemeModule } from '../@theme/theme.module';
import { SystemUserInsertComponent } from './system-user-insert/system-user-insert.component';
import { SystemUserListComponent } from './system-user-list/system-user-list.component';
import { SystemUserRoutingModule } from './system-user-routing.module';
import { SystemUserComponent } from './system-user.component';



@NgModule({
  declarations: [
    SystemUserComponent,
    SystemUserInsertComponent,
    SystemUserListComponent
  ],
  imports: [
    CommonModule,
    SystemUserRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbDatepickerModule,
    NgxMaskModule.forChild(),
    NbSpinnerModule,
    NbIconModule,
    NbAccordionModule,
    NbListModule,
    NbAlertModule,
    NbFormFieldModule,
  ]
})
export class SystemUserModule { }
