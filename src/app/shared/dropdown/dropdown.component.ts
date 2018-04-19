import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import * as M from 'materialize-css';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Option } from "../option.model";
import { Observable } from 'rxjs';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @Input() placeholder: string;
  @Input() options:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  @Output() optionsChange: EventEmitter<any> = new EventEmitter();

  private randomId: string;
  private selectedStatus;
  test =  Observable.of([{id: 1, value: 'Poloniex'}, {id: 2, value: 'Test'}]);

  constructor() {
    this.randomId = ('' + Math.random()).substring(2);
  }

  pickOption(id: number) {
    console.log('pickOption', id);
  }

  ngOnInit() {
    this.options.subscribe(v => {
        console.log(v);
    });

    this.test.subscribe(v => {
      console.log('test', v);
    });
  }

  ngAfterViewInit() {
    // let elem = document.getElementById(this.randomId);
    // let instance = M.FormSelect.init(elem, [{id: 1 , name: 'name'}]);
    // console.log('elem', instance);
  }

}
