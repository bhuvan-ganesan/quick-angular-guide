import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryCardV2Component } from './country-card-v2/country-card-v2.components';
import { CountryCardComponent } from './country-card/country-card.component';
import { BindingComponent } from './binding/binding.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    CountryCardV2Component,
    BindingComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
