/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ObserversModule } from '@angular/cdk/observers';
import { PlatformModule } from '@angular/cdk/platform';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbMenuModule,
  NbSidebarModule, NbSpinnerModule, NbTabsetModule,
  NbToastrModule,
  NbWindowModule
} from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductSearchComponent } from './shared/product-search/product-search.component';



@NgModule({
  declarations: [AppComponent, ProductSearchComponent],
  imports: [
    BrowserModule,
    ObserversModule,
    PlatformModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSpinnerModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbCardModule,
    NbButtonModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true,

    }
    ),
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbTabsetModule,
    NbListModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}

