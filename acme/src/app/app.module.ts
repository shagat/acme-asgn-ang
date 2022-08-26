import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { ContentComponent } from './layout/content/content.component';
import { StatisticsComponent } from './layout/content/statistics/statistics.component';
import { SalesComponent } from './layout/content/sales/sales.component';
import { ProfileComponent } from './layout/content/profile/profile.component';
import { ReferralComponent } from './layout/content/referral/referral.component';
import { ProductComponent } from './layout/content/product/product.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    MainComponent,
    ContentComponent,
    StatisticsComponent,
    SalesComponent,
    ProfileComponent,
    ReferralComponent,
    ProductComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
