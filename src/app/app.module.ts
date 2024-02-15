import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SalesByMonthComponent } from './sales-by-month/sales-by-month.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionsComponent } from './last-few-transactions/last-few-transactions.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    SalesByMonthComponent,
    TopWidgetsComponent,
    SalesByCategoryComponent,
    LastFewTransactionsComponent,
    TopThreeProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
