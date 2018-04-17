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
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    PairingChartModule,
    NavbarModule
  ],
  providers: [
    AppGuard,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [
        AppService
      ]
    };
  }
}
