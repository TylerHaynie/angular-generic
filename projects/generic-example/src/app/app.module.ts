import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  GenericAlertModule, GenericTableModule, GenericButtonModule,
  GenericServiceModule, GenericDataSourceModule, GenericNavigationModule,
  GenericTablePagerModule, GenericTableFilterModule, GenericInputModule,
  GenericElementModule, GenericModalModule, GenericAlertService
} from 'angular-generics';

import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { MenuExampleComponent } from './components/menu-example/menu-example.component';

import { AppRoutingModule } from './app-routing.module';
import { ListExampleComponent } from './components/list-example/list-example.component';
import { AlertExampleComponent } from './components/alert-example/alert-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalExampleComponent,
    TableExampleComponent,
    InputExampleComponent,
    MenuExampleComponent,
    ListExampleComponent,
    AlertExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GenericElementModule,
    GenericAlertModule,
    GenericTableModule,
    GenericButtonModule,
    GenericServiceModule,
    GenericInputModule,
    GenericDataSourceModule,
    GenericNavigationModule,
    GenericTablePagerModule,
    GenericTableFilterModule,
    GenericModalModule
  ],
  providers: [
    GenericAlertService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
