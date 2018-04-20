import { Injectable } from '@angular/core';
import { CrudAPI } from "./crud.service";
import { HttpClient } from "@angular/common/http";
import { LoadingBarService } from "./loading-bar.service";
import { Observable } from "rxjs";
import { RESOURCE_EXCHANGE_OPTIONS } from "./config";

@Injectable()
export class ApiService extends CrudAPI{

  constructor(
    public http: HttpClient,
    public loadingBarService: LoadingBarService,
  ) {
    super(http, loadingBarService);
  }

  getExchangeOptionsList(): Observable<any> {
    // return this.read(RESOURCE_EXCHANGE_OPTIONS);
    return Observable.of([{id: 1, value: 'Poloniex'}]);
  }

  getCurrencyPairOptionsList(exchangeId: number): Observable<any> {
    // return this.read(RESOURCE_EXCHANGE_OPTIONS);
    return Observable.of([{id: 1, value: 'BTC USDT'}]);
  }

  getSamplingPeriodList(exchangeId: number, pairId: number): Observable<any> {
    console.log('tut');
    // return this.read(RESOURCE_EXCHANGE_OPTIONS);
    return Observable.of([
      {id: 1, value: '5 min'},
      {id: 2, value: '15 min'},
      {id: 3, value: '30 min'},
      {id: 4, value: '2 hr'},
      {id: 5, value: '4 hr'},
      {id: 6, value: '1 day'},
      ]);
  }

  getForecastingPeriodConfig(exchangeId: number, pairId: number): Observable<any> {
    // return this.read(RESOURCE_EXCHANGE_OPTIONS);
    return Observable.of({
      minDate: '2018-03-07',
      maxDate: '2018-04-20',
      enableTime
        :
        false
    });
  }
}
