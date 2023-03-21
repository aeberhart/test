import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JsonSchemaFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
