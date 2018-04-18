import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import { Observable } from "rxjs";
import { PairingChartService } from "./pairing-chart.service";

@Component({
  selector: 'pairing-chart',
  templateUrl: './pairing-chart.component.html',
  styleUrls: ['./pairing-chart.component.css'],
  providers: [
    PairingChartService
  ]
})
export class PairingChartComponent implements OnInit, AfterViewInit {

  test: any = [
  {
    "name": "Germany",
    "series": [
      {
        "name": "2010",
        "value": 7300000
      },
      {
        "name": "2011",
        "value": 8940000
      }
    ]
  },

  {
    "name": "USA",
    "series": [
      {
        "name": "2010",
        "value": 7870000
      },
      {
        "name": "2011",
        "value": 8270000
      }
    ]
  },

  {
    "name": "France",
    "series": [
      {
        "name": "2010",
        "value": 5000002
      },
      {
        "name": "2011",
        "value": 5800000
      }
    ]
  }
];

   // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  timeline = true;

  private options = Observable.of([
    {id: 1, name: 'USDT_BTC'}
  ]);

  private optionsChange($event) {
    console.log('optionsChange($event)', $event);
  }
  constructor(
    private pairingChartService: PairingChartService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
