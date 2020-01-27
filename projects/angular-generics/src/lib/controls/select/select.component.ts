import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { GenericInput } from '../generic-control/generic-input';

@Component({
  selector: 'ag-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SelectComponent extends GenericInput {
  type: string = 'text';

  @Input() displayName: string;
  @Input() options: any[] = [];
  @Input() multiple: boolean = false;

  @Output() selectionChange: EventEmitter<any>;

  constructor() {
    super();
    this.selectionChange = new EventEmitter<any>();
  }

  selectionChanged(val: any) {
    this.selectionChange.emit(val);
  }

  compareSelect(c1: any, c2: any): boolean {
    if (c1 && c2) {
      if (c1.id && c2.id) {
        return c1.id === c2.id;
      }
      else {
        return c1 === c2;
      }
    }

    return false;
  }
}
