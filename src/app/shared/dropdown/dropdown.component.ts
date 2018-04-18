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

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, AfterViewInit {
  @Input() id: number; //TODO: REMOVE!!!
  @Input() placeholder: string;
  @Input() options:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  @Output() optionsChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var elem = document.getElementById(this.id+'');
    var instance = M.FormSelect.init(elem);
  }

}
