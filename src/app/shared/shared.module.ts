import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarService } from "./loading-bar.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatSelect, MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    Ng2FlatpickrModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  declarations: [
    DropdownComponent, //TODO: Remove all not used ...
    RadioButtonComponent,
    DatePickerComponent
  ],
  exports: [
    DropdownComponent,
    RadioButtonComponent,
    DatePickerComponent,
    MatSlideToggleModule,
    MatSliderModule
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
