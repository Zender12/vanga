import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../app.guard';
import { ImportComponent } from './import.component';

const ImportRoutes: Routes = [
  {
    path: 'import',
    component: ImportComponent,
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ImportRoutes) ],
  exports: [ RouterModule ]
})
export class ImportRoutingModule {}
