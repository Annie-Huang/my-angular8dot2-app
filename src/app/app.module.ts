import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EaUiModule } from '@ea/ea-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EaUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
