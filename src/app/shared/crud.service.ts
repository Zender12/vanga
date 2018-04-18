import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { LoadingBarService } from './loading-bar.service';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";

@Injectable()
export class CrudAPI {
  constructor(
    public http: HttpClient,
    public loadingBarService: LoadingBarService
  ) {}

  read(url: string, param?: Array<string>): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    headers.append('Content-Type','application/json');
    let options = {headers};


    if (param) {
      params = params.append(param[0], param[1]);
    }

    this.loadingStart();
    let subscription = this.http.get(url, {headers, params}).share()
      .map((response: any) => {
        return response.json().data;
      });

    subscription.subscribe(
      result => {},
      error => { this.handleError(error); },
      () => { this.loadingComplete(); }
    );
    return subscription;
  }


  protected handleError(response: Response | any): Observable<any> {
    let message: string;
    this.loadingComplete();

    const status: number = response.status;
    const body = response.json() || '';
    message = body.data;

    return Observable.throw(message);
  }

  protected loadingStart() {
    this.loadingBarService.start();
  }

  protected loadingComplete() {
    this.loadingBarService.complete();
  }
}
