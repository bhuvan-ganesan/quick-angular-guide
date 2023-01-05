import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ttClassDirective } from './tt-class.directive';
import { ttIfDirective } from './tt-if.directive';
import { ttTooltipDirective } from './tt-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    ttClassDirective,
    ttIfDirective,
    ttTooltipDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
