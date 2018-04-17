import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from "../app.guard";
import { PairingChartComponent } from "./pairing-chart.component";

const PairingChartRoutes: Routes = [
  {
    path: 'pairing-chart',
    component: PairingChartComponent,
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(PairingChartRoutes) ],
  exports: [ RouterModule ]
})
export class PairingChartRoutingModule {}
