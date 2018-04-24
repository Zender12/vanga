import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Option } from '../shared/option.model';
import { AppService } from '../app.service';

@Injectable()
export class PairingChartService {
  public currentExchange$: BehaviorSubject<number> = new BehaviorSubject(null);
  public currentCurrencyPair$:  BehaviorSubject<number> = new BehaviorSubject(null);
  public currentSamplingPeriod$:  BehaviorSubject<number> = new BehaviorSubject(null);
  public currentDatePeriod$:  BehaviorSubject<Array<string>> = new BehaviorSubject(null);
  public numberOfIterations$:  BehaviorSubject<number> = new BehaviorSubject(null);

  public exchangeOptions$: BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public currencyPairOptions$:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public samplingPeriodOptions$:  BehaviorSubject<Array<Option>> = new BehaviorSubject([]);
  public forecastingPeriodConfig$:  BehaviorSubject<any> = new BehaviorSubject({
    dateFormat: 'Y-m-d',
    enableTime: false,
    mode: 'range',
  });
  public diagramData$:  BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private apiService: ApiService,
    private appService: AppService
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
    this.getDigarammData();// TODO: Rename
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

  getDigarammData() { // TODO: Rename
    this.currentExchange$.combineLatest(
      this.currentCurrencyPair$.filter(value => !!value),
      this.currentSamplingPeriod$.filter(value => !!value),
      this.currentDatePeriod$.filter(value => !!value)
    )
      .subscribe(value => {
          let request = {
            exchange: value[0],
            currencyPair: value[1],
            samplingPeriod: value[2],
            datePeriod: value[3],
          }
          this.apiService.getDigarammData(request).subscribe(response => {
            this.diagramData$.next(response);
          });
      });
  }

  validateConfigForm() { // Todo: noramal validateConfigForm
     return  this.currentExchange$.combineLatest(
      this.currentCurrencyPair$.filter(value => !!value),
      this.currentSamplingPeriod$.filter(value => !!value),
      this.currentDatePeriod$.filter(value => !!value),
      this.numberOfIterations$.filter(value => !!value)
    )
      .map(value => {
        return true;
      });

  }

  getForecast() {// TODO: Rename
    this.currentExchange$.combineLatest(
      this.currentCurrencyPair$.filter(value => !!value),
      this.currentSamplingPeriod$.filter(value => !!value),
      this.currentDatePeriod$.filter(value => !!value),
      this.numberOfIterations$.filter(value => !!value)
    )
      .take(1)
      .subscribe(value => {
          let request = {
            exchange: value[0],
            currencyPair: value[1],
            samplingPeriod: value[2],
            datePeriod: value[3],
            numberOfIterations: value[4],
          }
          this.apiService.getForecast(request).subscribe(response => {
            this.diagramData$.next(response);
          });
      });
  }

}
