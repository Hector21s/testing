import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media/media.component';
import { RegresionLinealComponent } from './regresion-lineal/regresion-lineal.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    RegresionLinealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
