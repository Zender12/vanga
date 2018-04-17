import { NgModule } from '@angular/core';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { AppService } from "../app.service";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [
      AuthRoutingModule,
      FormsModule,
      BrowserModule,
    ],
    declarations: [
      AuthComponent,
    ],
    providers: [
      AppService
    ]
})
export class AuthModule {}
