import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryCardV2Component } from './country-card-v2/country-card-v2.components';
import { CountryCardComponent } from './country-card/country-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    CountryCardV2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
