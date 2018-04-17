import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PairingChartComponent } from "./pairing-chart.component";
import { PairingChartRoutingModule } from "./pairing-chart-routing.module";

@NgModule({
  imports: [
    CommonModule,
    PairingChartRoutingModule
  ],
  declarations: [
    PairingChartComponent
  ],
  exports: [
    PairingChartComponent
  ]
})
export class PairingChartModule { }
