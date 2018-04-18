import { Injectable } from '@angular/core';
import { ApiService } from "../shared/api.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PairingChartService {
  constructor(
    private apiService: ApiService,
  ) {}

  getExchangeOptionsList(): Observable<any> {
    return this.apiService.getExchangeOptionsList();
  }

  getCurrencyPairOptionsList(exchangeId: number): Observable<any> {
    return this.apiService.getCurrencyPairOptionsList(exchangeId);
  }

}
