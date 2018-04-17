import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from "./app.guard";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    canActivate: [AppGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
