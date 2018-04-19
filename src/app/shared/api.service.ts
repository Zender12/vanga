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
    return Observable.of([{id: 1, value: 'Poloniex'}, {id: 2, value: 'Test'}]);
  }

  getCurrencyPairOptionsList(exchangeId: number): Observable<any> {
    // return this.read(RESOURCE_EXCHANGE_OPTIONS);
    return Observable.of([{id: 1, value: 'BTC USDT'}]);
  }
}
