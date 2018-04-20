import { Injectable } from '@angular/core';
import { ApiService } from "../shared/api.service";
import { Observable, BehaviorSubject } from "rxjs";
import { Option } from '../shared/option.model';

@Injectable()
export class PairingChartService {
  public currentExchange$: BehaviorSubject<number> = new BehaviorSubject(null);
  public currentCurrencyPair$:  BehaviorSubject<number> = new BehaviorSubject(null);
  public currentSamplingPeriod$:  BehaviorSubject<number> = new BehaviorSubject(null);
  public exchangeOptions$: BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public currencyPairOptions$:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public samplingPeriodOptions$:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public forecastingPeriodConfig$:  BehaviorSubject<any> = new BehaviorSubject({
    dateFormat: 'Y-m-d',
    enableTime: true,
    mode: 'range',
  });

  constructor(
    private apiService: ApiService,
  ) {}

  initPairingChartService() {
    this.getExchangeOptionsList().take(1).subscribe((options: Array<Option>) => this.exchangeOptions$.next(options));

    this.currentExchange$
      .filter(value => !!value)
      .subscribe(exchangeId => {
        this.apiService.getCurrencyPairOptionsList(exchangeId)
          .take(1)
          .subscribe((options: Array<Option>) => this.currencyPairOptions$.next(options)
        );
      });

    this.currentExchange$
      .filter(value => !!value)
      .combineLatest(this.currentCurrencyPair$.filter(value => !!value))
      .subscribe(ids => {
        this.getSamplingPeriodOptions(ids[0], ids[1]);  // wtf? ...ids
        this.getForecastingPeriodConfig(ids[0], ids[1]);
      }
    );
  }

  getExchangeOptionsList(): Observable<any> {
    return this.apiService.getExchangeOptionsList();
  }

  getSamplingPeriodOptions (exchangeId: number, pairId: number) {
    this.apiService.getSamplingPeriodList(exchangeId, pairId)
      .take(1)
      .subscribe((options: Array<Option>) => this.samplingPeriodOptions$.next(options)
      );
  }

  getForecastingPeriodConfig (exchangeId: number, pairId: number) {
    this.apiService.getForecastingPeriodConfig(exchangeId, pairId)
      .take(1)
      .map(config => ({...config, ...this.forecastingPeriodConfig$.getValue()}))
      .subscribe(config => this.forecastingPeriodConfig$.next(config));
  }

}