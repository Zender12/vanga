import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit, SimpleChanges, OnChanges, AfterViewInit
} from '@angular/core';
import { FlatpickrOptions, Ng2FlatpickrComponent } from 'ng2-flatpickr';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit, AfterViewInit {
  @Input() setDate: string | Date;
  @Input() placeholder: string = '';
  @Input() configuration: BehaviorSubject<any> = new BehaviorSubject([]);
  @Output() onDatePick: EventEmitter<any> = new EventEmitter();
  @ViewChild('datePicker') datePicker: Ng2FlatpickrComponent

  private flatpickrOptions: FlatpickrOptions;

  ngOnInit() {
    this.configuration.take(1).subscribe(options => {
      this.flatpickrOptions = options;
    });
  }

  ngAfterViewInit() {
     this.datePicker.registerOnChange((inputValue) => {
      inputValue = inputValue.map(v => moment(v).format('YYYY-MM-DD'));
      if (this.isRangeFilter() && inputValue.length === 2) {
        this.onDatePick.emit(inputValue);
      } else if (!this.isRangeFilter()) {
        this.onDatePick.emit(inputValue);
      }
    });
  }

  private isRangeFilter() {
    return !!this.configuration.getValue() ? this.configuration.getValue().mode : 'multiple';
  }
}
