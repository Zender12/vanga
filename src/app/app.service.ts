import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { ApiService } from "./shared/api.service";

@Injectable()
export class AppService {
  private isLogged: boolean = true;
  private appConfig:  BehaviorSubject<Array<any>> = new BehaviorSubject(null); // TODO: add intreface

  constructor(
    private apiService: ApiService
  ) {
    this.initAppConfig();
  }

  initAppConfig() {
    this.apiService.getAppConfig().subscribe(config => {
      this.appConfig.next(config);
    });
  }

  public getAppConfig() {
    return this.appConfig;
  }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  setIsLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
