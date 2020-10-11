import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHw2TestComponent } from './app/hw2/app-hw2-test/app-hw2-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHw2TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
