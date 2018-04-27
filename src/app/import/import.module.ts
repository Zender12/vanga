import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ImportService } from './import.service';
import { ImportComponent } from './import.component';
import { ImportRoutingModule } from './import-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ImportRoutingModule,
    SharedModule
  ],
  declarations: [
    ImportComponent
  ],
  exports: [
    ImportComponent
  ],
  providers: [
    ImportService
  ]
})
export class ImportModule { }
