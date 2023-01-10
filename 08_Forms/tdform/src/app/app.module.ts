import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormExampleComponent,
    FormBuilderExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
