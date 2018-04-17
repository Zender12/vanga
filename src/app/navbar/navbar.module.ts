import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
