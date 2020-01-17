import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableFilterComponent } from './table-filter.component';
import { GenericInputModule } from '../../input/input.module';
import { GenericSelectModule } from '../../select/select.module';
import { GenericRangeModule } from 'dist/angular-generics/public-api';
import { GenericButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [
    TableFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GenericInputModule,
    GenericSelectModule,
    GenericButtonModule,
    GenericRangeModule
  ],
  exports: [
    TableFilterComponent
  ]
})

export class GenericFilterModule { }
