import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AppService } from "./app.service";

@Injectable()
export class AppGuard implements CanActivate {
  constructor(
    private appService: AppService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log('can activate');
    if (!this.appService.getIsLogged()) {
      setTimeout(() => this.router.navigate(['login']));
    }
    return this.appService.getIsLogged();
  }
}
