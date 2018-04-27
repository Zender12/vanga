import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { ImportService } from './import.service';

@Component({
  selector: 'import-test',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css'],
  providers: [
    ImportService
  ]
})
export class ImportComponent implements OnInit, AfterViewInit {


  constructor(
  ) { }


  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
