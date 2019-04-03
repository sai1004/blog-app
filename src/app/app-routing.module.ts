import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeModule } from './containers/welcome-page/welcome.module';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth/signin" },
  {
    path: "welcome",
    loadChildren: "./containers/welcome-page/welcome.module#WelcomeModule",
  },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes), WelcomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
