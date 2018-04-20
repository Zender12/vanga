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
import { FlatpickrInstance } from 'ng2-flatpickr/src/flatpickr-instance';

@Component({
  selector: 'date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() value: string | Date;
  @Input() placeholder: string = '';
  @Input() configuration: BehaviorSubject<any> = new BehaviorSubject([]);
  @Output() onDatePick: EventEmitter<any> = new EventEmitter();
  @ViewChild('datePicker') datePicker: Ng2FlatpickrComponent;

  private flatpickrOptions: FlatpickrOptions;
  private flatpickrInstance: FlatpickrInstance;

  ngOnInit() {
    this.configuration.subscribe(v => {
      this.datePicker.config = v;
      // Object.entries(v).forEach(
      //   ([option, value]) => {
      //     this.flatpickrInstance.set(option, value);
      //   }
      // );
    });


    this.datePicker.registerOnChange((inputValue) => {
      inputValue = inputValue.map(v => moment(v).format('YYYY-MM-DD'));

      if (this.isRangeFilter() && inputValue.length === 2) {
        this.onDatePick.emit(inputValue);
      } else if (!this.isRangeFilter()) {
        this.onDatePick.emit(inputValue);
      }
    });


  }

  ngAfterViewInit() {
    // console.log(' this.datePicker.flatpickrElement',  this.datePicker.config = );
    // this.flatpickrInstance = this.datePicker.flatpickrElement.flatpickr( this.flatpickrOptions );
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('changes: SimpleChanges', changes);
  }

  private getDatePickerConf() {
    // return  this.configuration;
    // let flatpickrOptions = this.filterConfiguration.get('filter_parameter').toJS();
    // let parent = this;
    // flatpickrOptions.onReady = function(dateObj, dateStr, instance) {
    //   $('.flatpickr-calendar').each(function() {
    //     let $this = $(this);
    //     if ($this.find('.flatpickr-clear').length < 1) {
    //       $this.append('<div class="flatpickr-clear" style="cursor: pointer">Clear</div>');
    //       $this.find('.flatpickr-clear').on('click', () => {
    //         parent.onUpdateFilter.emit();
    //         instance.clear();
    //         instance.close();
    //       });
    //     }
    //   });
    // };

    // return flatpickrOptions;
  }

  private isRangeFilter() {
    return !!this.configuration.getValue() ? this.configuration.getValue().mode : 'multiple';
  }
}