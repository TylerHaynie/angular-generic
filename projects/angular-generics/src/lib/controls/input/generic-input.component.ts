import { Component, Input, TemplateRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MakeProvider, AbstractValueAccessor } from '../../helpers/abstract-value-accessor';
import { GenericApiService } from '../../services/generic-api.service';

@Component({
  selector: 'ag-input',
  templateUrl: './generic-input.component.html',
  providers: [MakeProvider(GenericInputComponent)]
})
export class GenericInputComponent extends AbstractValueAccessor implements OnChanges, OnInit {
  // General
  @Input() disabled: boolean = false;
  @Input() customTemplate: TemplateRef<any>;
  @Input() required: boolean = false;

  // Label
  @Input() labelPosition: 'above' | 'left' = 'left';
  @Input() labelPlacement: string = 'center start';
  @Input() showLabel: boolean = true;

  @Input() fromLabel: string = 'from';
  @Input() toLabel: string = 'to';

  @Input() type: string = 'text';
  @Input() subtype: string = 'default';
  @Input() placeholder: string = '';

  // Text Area
  @Input() textRows: number = 5;
  @Input() textColumns: number = 0;

  // Source and Selection
  @Input() source: string;
  @Input() displayProperty: string;
  @Input() valueProperty: string;
  @Input() options: any[] = [];

  // File Upload and Selection
  @Input() multiple: boolean = false;

  fromValue: any;
  toValue: any;

  constructor(private api: GenericApiService) {
    super();
  }

  ngOnInit(): void {
    if (this.source && !this.displayProperty) {
      console.error(`[displayProperty] was not set for input with [source] or [options] usage'. A [displayProperty] is REQUIRED to diplsay when [source] or [options] is used.`);
    }

  }

  // For anything using source
  ngOnChanges(changes: SimpleChanges) {
    if (changes.source) {
      const sourceChange = changes.source.currentValue !== changes.source.previousValue;
      if (sourceChange) {
        this.getSource();
      }
    }
  }

  private getSource(): void {
    if (this.source) {
      this.api.get(this.source)
        .then((items) => {
          if (items) {
            this.options = items;
          }
        });
    }

  }

  rangeChange(): void {
    this.value = { from: this.fromValue, to: this.toValue };
  }
}
