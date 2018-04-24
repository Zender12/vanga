import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import * as M from 'materialize-css';
import { BehaviorSubject } from "rxjs";
import { Option } from "../option.model";

@Component({
  selector: 'radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit, AfterViewInit {
  @Input() placeholder: string;
  @Input() disableSelect: boolean = false;
  @Input() options: BehaviorSubject<Array<Option>> = new BehaviorSubject(null);
  @Output() optionsChange: EventEmitter<any> = new EventEmitter();

  private randomId: string;
  private selectedStatus;
  public selectorOptions: Array<Option>;

  constructor() {
    this.randomId = ('' + Math.random()).substring(2);
  }

  pickOption(id: number) {
    this.optionsChange.emit(id);
  }

  ngOnInit() {
    this.options.subscribe(options => {
        this.selectorOptions = options;
    });

  }

  ngAfterViewInit() {
    // let elem = document.getElementById(this.randomId);
    // let instance = M.FormSelect.init(elem, [{id: 1 , name: 'name'}]);
    // console.log('elem', instance);
  }

}
