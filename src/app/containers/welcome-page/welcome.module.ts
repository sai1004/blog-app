import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeBannerComponent } from '../../components/welcome-banner/welcome-banner.component';
import { welcomePageContainer } from './welcome-page.container';
import { WelcomeNavComponent } from '../../components/welcome-nav/welcome-nav.component';
import { WelcomeFootComponent } from '../../components/welcome-foot/welcome-foot.component';

// import { WelcomeService } from "./welcome.service";

const routes: Routes = [

    { path: "", component:  welcomePageContainer }


];

@NgModule({
  imports: [CommonModule, SharedModule,   RouterModule.forChild(routes)

],
  declarations: [ WelcomeNavComponent, WelcomeBannerComponent,WelcomeFootComponent, welcomePageContainer
],
  providers: [ ]
})
export class WelcomeModule {}
