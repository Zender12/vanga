import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PairingChartComponent } from "./pairing-chart.component";
import { PairingChartRoutingModule } from "./pairing-chart-routing.module";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  imports: [
    CommonModule,
    PairingChartRoutingModule,
    NgxChartsModule
  ],
  declarations: [
    PairingChartComponent
  ],
  exports: [
    PairingChartComponent
  ]
})
export class PairingChartModule { }
