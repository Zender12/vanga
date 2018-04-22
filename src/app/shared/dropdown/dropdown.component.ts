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
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @Input() placeholder: string;
  @Input() disableSelect: boolean = false;
  @Input() options:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  @Output() optionsChange: EventEmitter<any> = new EventEmitter();

  private randomId: string;
  private selectedStatus;
  private selectorOptions: Array<Option>;

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
  }

}
