import {
  AfterViewInit,
  Component, ElementRef,
  OnInit, ViewChild
} from '@angular/core';
import { Observable } from "rxjs";
import { PairingChartService } from "./pairing-chart.service";
import * as M from 'materialize-css';

@Component({
  selector: 'pairing-chart',
  templateUrl: './pairing-chart.component.html',
  styleUrls: ['./pairing-chart.component.css'],
  providers: [
    PairingChartService
  ]
})
export class PairingChartComponent implements OnInit, AfterViewInit {
  private currentExchange: number;
  private currentCurrencyPair: number;
  private currentSamplingPeriod: number;
  private forecastingPeriodConfig: any;

  @ViewChild('forecastingPeriod') forecastingPeriodElement: ElementRef;

  constructor(
    private pairingChartService: PairingChartService
  ) { }

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

  enablePairSelector() {
    return !+this.currentExchange;
  }

  enablePeriodSelector() {
    return !(!!+this.currentExchange && !!+this.currentCurrencyPair);
  }

  setExchange($event) {
    this.currentExchange = $event;
    this.pairingChartService.currentExchange$.next(this.currentExchange);
  }

  setCurrencyPair($event) {
    this.currentCurrencyPair = $event;
    this.pairingChartService.currentCurrencyPair$.next(this.currentCurrencyPair);
  }

  setSamplingPeriod($event) {
    this.currentSamplingPeriod = $event;
    this.pairingChartService.currentSamplingPeriod$.next(this.currentSamplingPeriod);
  }

  onDatePick($event) {
    console.log('onDatePick($event)', $event);
  }

  ngOnInit() {
    this.forecastingPeriodConfig = {
      dateFormat: 'Y-m-d',
      enableTime: false,
      mode: 'range',
    };



    this.pairingChartService.initPairingChartService();

    this.pairingChartService.forecastingPeriodConfig$.subscribe(v => {
        console.log('xer', v);
    });
  }

  ngAfterViewInit() {
    let elem = document.querySelector('#pairing-chart-slide-out');
    let instance = M.Sidenav.init(elem);
  }

}
