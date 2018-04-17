import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private pass: string;
  private login: string;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  updateValue(event) {
    console.log(event);
  }

  private onClickLogin() {
    console.log('login');
    this.appService.setIsLogged(true);

    this.router.navigate(['/'])

  }
  ngOnInit() {
    console.log('auth init');
  }

}
