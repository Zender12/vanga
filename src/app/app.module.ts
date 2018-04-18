import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppGuard } from "./app.guard";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { PairingChartModule } from "./pairing-chart/pairing-chart.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from "./navbar/navbar.module";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { NgProgressModule } from "@ngx-progressbar/core";
import { ApiService } from "./shared/api.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    PairingChartModule,
    NavbarModule,
    SharedModule,
    NgProgressModule.forRoot()
  ],
  exports: [
    SharedModule,
    NgProgressModule
  ],
  providers: [
    AppGuard,
    AppService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        AppService,
        ApiService
      ]
    };
  }
}
