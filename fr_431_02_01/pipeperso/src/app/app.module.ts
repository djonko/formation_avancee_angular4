import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckmarkPipe } from './checkmark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CheckmarkPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
