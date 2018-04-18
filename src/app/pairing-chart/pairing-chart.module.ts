import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PairingChartComponent } from "./pairing-chart.component";
import { PairingChartRoutingModule } from "./pairing-chart-routing.module";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { SharedModule } from "../shared/shared.module";
import { PairingChartService } from "./pairing-chart.service";

@NgModule({
  imports: [
    CommonModule,
    PairingChartRoutingModule,
    NgxChartsModule,
    SharedModule
  ],
  declarations: [
    PairingChartComponent
  ],
  exports: [
    PairingChartComponent
  ],
  providers: [
    PairingChartService
  ]
})
export class PairingChartModule { }
