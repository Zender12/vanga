import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarService } from "./loading-bar.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelect, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ],
  providers: [
    LoadingBarService
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService,
        LoadingBarService
      ]
    };
  }

}
