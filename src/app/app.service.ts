import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private isLogged: boolean = true;

  constructor() { }

  getIsLogged(): boolean {
    return this.isLogged;
  }

  setIsLogged(isLogged: boolean) {
    this.isLogged = isLogged;
  }
}
