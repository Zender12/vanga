import {
  AfterViewInit,
  Component, ElementRef,
  OnInit, ViewChild
} from '@angular/core';
import { Observable } from "rxjs";
import { PairingChartService } from "./pairing-chart.service";
import * as M from 'materialize-css';
import { FlatpickrOptions } from "ng2-flatpickr";

@Component({
  selector: 'pairing-chart',
  templateUrl: './pairing-chart.component.html',
  styleUrls: ['./pairing-chart.component.css'],
  providers: [
    PairingChartService
  ]
})
export class PairingChartComponent implements OnInit, AfterViewInit {
  private currentExchange: number; // TODO: Remove
  private currentCurrencyPair: number; // TODO: Remove
  private currentSamplingPeriod: number; // TODO: Remove
  private forecastingPeriodConfig: FlatpickrOptions;
  private showConfigForm = false;
  private showDiagram = false;
  private setMaxDate: any;
  private diagramData: any = false;
  private enableCalculateButton = false;

  @ViewChild('forecastingPeriod') forecastingPeriodElement: ElementRef;

  constructor(
    private pairingChartService: PairingChartService
  ) { }

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

  // private options = Observable.of([
  //   {id: 1, name: 'USDT_BTC'}
  // ]);

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
    this.pairingChartService.currentDatePeriod$.next($event);
  }

  setMaximumPeriod($event) {
    if ($event.checked) {
      this.setMaxDate = [this.forecastingPeriodConfig.minDate, this.forecastingPeriodConfig.maxDate];
    }
  }

  setNumberOfIterations($event) {
    this.pairingChartService.numberOfIterations$.next($event.value);
  }

  calculate() {
    this.pairingChartService.getForecast();
  }

  ngOnInit() {
    this.pairingChartService.initPairingChartService();
    this.pairingChartService.forecastingPeriodConfig$
      .filter(value => !!value)
      .skip(1)
      .subscribe(config => {
        this.forecastingPeriodConfig = config;
        this.showConfigForm = true;
    });

    this.pairingChartService.diagramData$
      .filter(value => !!value)
      .subscribe(value => {
        this.diagramData = value.data;
        this.yAxisLabel = value.yLabel;
        this.xAxisLabel = value.xLabel;
        this.showDiagram = true;
      });

    this.pairingChartService.validateConfigForm().subscribe(value => {
      this.enableCalculateButton = value;
    });
  }

  ngAfterViewInit() {
    let elem = document.querySelector('#pairing-chart-slide-out');
    let instance = M.Sidenav.init(elem);
  }

}
