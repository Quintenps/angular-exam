import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrySelectorComponent } from './shared/country-selector/country-selector.component';
import { OverviewComponent } from './features/overview/overview.component';
import { LeagueTableComponent } from './shared/league-table/league-table.component';
import { HttpClientModule } from '@angular/common/http';
import { 
  HttpCacheInterceptorModule, 
  useHttpCacheLocalStorage 
} from '@ngneat/cashew';
import { ResultsComponent } from './features/results/results.component';
import { ResultTableComponent } from './shared/result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrySelectorComponent,
    OverviewComponent,
    LeagueTableComponent,
    ResultsComponent,
    ResultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot()
  ],
  providers: [useHttpCacheLocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
